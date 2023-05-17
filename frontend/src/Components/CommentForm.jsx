import { useState, useEffect } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CommentForm = ({ handleSubmit }) => {
  const [bodyComment, setBodyComment] = useState("");
  const [errorBodyComment, setBodyCommentError] = useState(null);
  const [errorPostComment, setErrorPostComment] = useState(null);
  const dataTosend = {
    userId: "6464f2238601ee81c183cd2",
    message: bodyComment,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(bodyComment);
    setBodyComment("");
    console.log(bodyComment);
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
