import { useState } from 'react';

function AddQuote(props) {
  const { addQuote } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Conditional rendering
  return (
    <>

    <div className="container mt-6">
      <h2 classNAME="mb-2">Post a quote</h2>

      <div className="field">
       <label className="label">Quote</label>
      <div className="control">
        <textarea className="textarea" onChange={(event) => setTitle(event.target.value)} type="text" />
      </div>
      </div>

      <div className="field">
       <label className="label">Author</label>
      <div className="control">
        <input onChange={(event) => setAuthor(event.target.value)} type="text" />
      </div>
      </div>

      <button type="button" className="button"onClick={(event) => {
        addQuote(title, author);
      }}>Post Quote
      </button>

      </div>
    </>
  );
}

export default AddQuote;
