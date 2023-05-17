import { FaUserCircle } from "react-icons/fa";

const CommentsList = ({ comments }) => {
  if (comments)
    return (
      <div className="comments-container">
        {comments.map((comment, key) => (
          <div key={key} className="container-each-comment">
            <div className="comment-username-avatar">
              <FaUserCircle />
            </div>
            <div className="comment-username-logo-date">{comment.userId}</div>
            <div className="comment-body">{comment.message}</div>
          </div>
        ))}
      </div>
    );
};

export default CommentsList;
