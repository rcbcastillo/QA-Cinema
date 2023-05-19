import { useState, useEffect } from "react";
import * as api from "../api";
import { Button, Form, Input } from "reactstrap";
import Profanity from "accurate-profanity-filter";

const CommentForm = () => {
  const [bodyComment, setBodyComment] = useState("");
  const [errorBodyComment, setBodyCommentError] = useState(null);
  const [errorPostComment, setErrorPostComment] = useState(null);
  const [errorPostCommentToSend, setErrorPostCommentToSend] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setBodyComment("");
    let filteredComment;

    if (bodyComment.length > 0) {
      const Filter = new Profanity({
        substitute: "*",
        addToFilter: { ENG: true, PHL: true },
      });

      filteredComment = Filter.filter(bodyComment);
      console.log(filteredComment);

      if (filteredComment.includes("*")) {
        setErrorPostCommentToSend(
          "IMPORTANT: Before you post a comment, consider adjusting your message. Bad language won't be tolerated!"
        );
      }
    }

    const dataTosend = {
      userId: "6464f2238601ee81c183cd2",
      message: filteredComment,
    };

    console.log(dataTosend, "<- dataToSend");
    api
      .createComment(dataTosend)
      .catch(() =>
        setErrorPostComment("This website is not working now. Try later!")
      );
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
        <h2>{bodyComment}</h2>
        <Button className="bg-pearl-aqua">Post comment</Button>
      </Form>
    </div>
  );
};

export default CommentForm;
