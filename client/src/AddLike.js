import { useState } from 'react';

function AddLike(props) {
  const { addLike } = props;

  const [like, setLike] = useState("");

  // Conditional rendering
  return (
    <>
      <button type="button" onClick={(event) => {
        setLike(event.target.value)
        addLike(like + 1);
      }}>Like
      </button>
    </>
  );
}

export default AddLike;