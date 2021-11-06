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

    function addLike(like) {
      console.log(like);
    
      const data = { 
        likes: like
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



    // Conditional rendering
    if (quote === undefined) {
      return <p>Nothing here</p>;
    } else return (
      <>
        <h3>{quote.title}</h3>
  
        <p>{quote.author}</p>

        <AddComment addComment={addComment}/>

        <AddLike addLike={addLike}/>

        <p>{quote.comments}</p>

        <p>{quote.likes} likes</p>
  
      </>
    );
  }
  
  export default Quote;