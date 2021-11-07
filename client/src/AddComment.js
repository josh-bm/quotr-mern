import { useState } from 'react';

function AddComment(props) {
  const { addComment } = props;

  const [comment, setComment] = useState("");

  // Conditional rendering
  return (
    <>
    <div className="container mt-6">
      <div className="field">
       <label className="label">Post a comment</label>
      <div className="control">
        <textarea className="textarea" onChange={(event) => setComment(event.target.value)} type="text" />
      </div>
      </div>
      
      </div>

      <div class="buttons has-addons is-right">  
      <button type="button" className="button mt-3 " onClick={(event) => {
        addComment(comment);
      }}>Post
      </button>
      </div>
    </>
  );
}

export default AddComment;