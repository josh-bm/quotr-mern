import { Link } from "@reach/router";
import AddQuote from "./AddQuote";

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
                    <Link to={`/quote/${quote._id}`}>{quote.title}</Link>
                  </li>
                );
              })
          }
        </ul>
        <AddQuote addQuote={addQuote}/>
      </>
    );
  }
  
  
  export default Quotes;