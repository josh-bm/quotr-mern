import { useState } from 'react';

function AddLike(props) {
  const { addLike } = props;

  const [like, setLike] = useState("");
//   const [description, setDescription] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [time, setTime] = useState("");

  // Conditional rendering
  return (
    <>
      <input onChange={(event) => setLike(event.target.value)} type="text" />
      {/* <input onChange={(event) => setDescription(event.target.value)} type="text" />
      <input onChange={(event) => setIngredients(event.target.value)} type="text" />
      <input onChange={(event) => setTime(event.target.value)} type="text" /> */}

      <button type="button" onClick={(event) => {
        // const ingArray = ingredients.split(" ");
        addLike(like);
      }}>Like
      </button>
    </>
  );
}

export default AddLike;