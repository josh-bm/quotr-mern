function Quote(props) {
    const { id, getQuote } = props;
    const quote = getQuote(id);
  
    // Conditional rendering
    if (quote === undefined) {
      return <p>Nothing here</p>;
    } else return (
      <>
        <h3>{quote.title}</h3>
  
        <p>{quote.author}</p>
  
      </>
    );
  }
  
  export default Quote;