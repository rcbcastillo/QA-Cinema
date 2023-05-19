import { useState, useEffect } from "react";
import * as api from "../api";
import { Button, Form, Input } from "reactstrap";
import Profanity from "accurate-profanity-filter";

const CommentForm = ({ handleSubmit }) => {
  const [bodyComment, setBodyComment] = useState("");
  const [errorBodyComment, setBodyCommentError] = useState(null);
  const [errorPostComment, setErrorPostComment] = useState(null);
  const [errorPostCommentToSend, setErrorPostCommentToSend] = useState(null);
  let filteredCommentToSend = "";
  let result = false;

  if (bodyComment.length > 0) {
    const Filter = new Profanity({
      substitute: "*",
      addToFilter: { ENG: true, PHL: true },
    });
    let filteredComment = Filter.filter(bodyComment);
    console.log(filteredComment);
    let strRegex = /^[0-9a-zA-Z]*$/;
    result = strRegex.test(filteredComment);
    console.log(result);
    if (!result) {
      filteredCommentToSend = filteredComment;
    }
  }

  const dataTosend = {
    userId: "6464f2238601ee81c183cd2",
    message: filteredCommentToSend,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(bodyComment);
    setBodyComment("");
    if (result === false) {
      setErrorPostCommentToSend(
        "IMPORTANT: Before you post a comment, consider adjusting your message. Bad language won't be tolerated!"
      );
    } else {
      api
        .createComment(dataTosend)
        .catch(() =>
          setErrorPostComment("This website is not working now. Try later!")
        );
    }
  };

  useEffect(() => {
    if (bodyComment.length > 500) {
      setBodyCommentError("Comment should be less than 500 characters");
    }
  }, [bodyComment]);

  if (errorPostComment) return <p>{errorPostComment}</p>;
  if (errorPostCommentToSend) return <p>{errorPostCommentToSend}</p>;

  return (
    <div name="username" className="p-2">
      <Form onSubmit={onSubmit}>
        {errorBodyComment ? <p>{errorBodyComment}</p> : null}
        <Input
          type="text"
          onChange={(e) => setBodyComment(e.target.value)}
          placeholder="write here ..."
        />
        <Button className="bg-pearl-aqua">Post comment</Button>
      </Form>
    </div>
  );
};

export default CommentForm;
