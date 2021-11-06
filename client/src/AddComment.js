import { useState } from 'react';

function AddComment(props) {
  const { addComment } = props;

  const [comment, setComment] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Post a comment</h3>

      <input onChange={(event) => setComment(event.target.value)} type="text" />

      <button type="button" onClick={(event) => {
        addComment(comment);
      }}>Post
      </button>
    </>
  );
}

export default AddComment;