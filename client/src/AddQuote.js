import { useState } from 'react';

function AddQuote(props) {
  const { addQuote } = props;

  const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [time, setTime] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Post a quote</h3>

      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      {/* <input onChange={(event) => setDescription(event.target.value)} type="text" />
      <input onChange={(event) => setIngredients(event.target.value)} type="text" />
      <input onChange={(event) => setTime(event.target.value)} type="text" /> */}

      <button type="button" onClick={(event) => {
        // const ingArray = ingredients.split(" ");
        addQuote(title);
      }}>Post Quote
      </button>
    </>
  );
}

export default AddQuote;
