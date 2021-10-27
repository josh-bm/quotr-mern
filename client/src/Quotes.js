import { Link } from "@reach/router";

function Quotes(props) {
    const { data, addQuote } = props;
  
    return (
      <>
  
  <h3>All Quotes</h3>
        <ul>
          {
            // All quotes
            data.map((quote) => {
                return (
                  <li key={quote._id}>
                    <Link to={`/quote/${quote.id}`}>{quote.title}</Link>
                  </li>
                );
              })
          }
        </ul>
      </>
    );
  }
  
  
  export default Quotes;