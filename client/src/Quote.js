import AddComment from "./AddComment";
import AddLike from "./AddLike"

function Quote(props) {
    const { id, getQuote } = props;
    const quote = getQuote(id);

    const API_URL = process.env.REACT_APP_API;
  
    function addComment(comment) {
      console.log(comment);
    
      const data = { 
        comments: comment
      };
      const postData = async () => {
        const url = `${API_URL}/quotes/${id}`;
    
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const reply = await response.json();
        console.log(reply);
    
      }; 
      postData();
    }

    function addLike() {
    
      const postData = async () => {
        const url = `${API_URL}/quotes/${id}/likes`;
    
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const reply = await response.json();
        console.log(reply);
    
      }; 
      postData();
    }


    // Conditional rendering
    if (quote === undefined) {
      return <p>Nothing here</p>;
    } else return (
      <>
 
        <div className="card mt-6">
          
          <div className="card-content">  
            <p className="title has-text-weight-normal">
              {quote.title}
            </p>
          </div>
          
          <footer className="card-footer">
            <p className="card-footer-item has-text-weight-bold">
              <span>
              {quote.author}
              </span>
            </p>
            
            <p className="card-footer-item">
              <span>
                {quote.likes} likes
              </span>
              <span className="ml-3">
                <AddLike addLike={addLike}/>
              </span>
            </p>


           
          </footer>
          </div>

          <article className="message is-dark">
            <ul>
            {quote.comments.map((item) => (
              <div className="message-body mt-5">
                <li key={item}> 
                  {item}
                </li>
              </div>
              ))}  
              </ul>                  
          </article>
          
          <AddComment addComment={addComment}/>
         

      </>
    );
  }
  
  export default Quote;