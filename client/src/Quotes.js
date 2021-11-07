import { Link } from "@reach/router";
import AddQuote from "./AddQuote";

function Quotes(props) {
    const { data, addQuote } = props;
  
    return (
      <>
  
        <ul>
        {
            // All quotes
            data.map((quote) => {
                return (
                  <li key={quote._id}> 
                    <Link to={`/quote/${quote._id}`}>
                    <div className="card  mt-6">
                    <div className="card-content">  
                      <p className="title">
                        {quote.title}
                      </p>
                    </div>
                    <footer className="card-footer">
                    <p className="card-footer-item">
                    <span>
                    {quote.author}
                    </span>
                    </p>
                    <p className="card-footer-item">
                    <span>
                    {quote.likes} likes
                    </span>
                    </p>
                    </footer>
                    </div>
                    </Link>
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