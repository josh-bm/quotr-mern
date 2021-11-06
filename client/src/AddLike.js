
function AddLike(props) {
  const { addLike } = props;

  // Conditional rendering
  return (
    <>
      <button type="button" onClick={(event) => {
        addLike(addLike);
      }}>Like
      </button>
    </>
  );
}

export default AddLike;