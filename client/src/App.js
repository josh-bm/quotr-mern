import { useEffect, useState } from "react";
import { Router } from "@reach/router";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Navigation from "./Navigation";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/quotes`;

      const response = await fetch(url);
      const data = await response.json();
      setQuotes(data);
    }
    getData();
  }, []);

  function getQuote(_id) { 
    return quotes.find(quote => quote._id === _id);
  }

  function addQuote(title) {
    console.log(title);
  
    const data = { 
      title: title
    };
    const postData = async () => {
      const url = `${API_URL}/quotes`;
  
      const response = await fetch(url, {
        method: 'POST',
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




  return (
    <>
    <div className="columns is-centered">
      <div className="column is-half ">
      <Navigation></Navigation>
      <Router>
        <Quotes path="/" data={quotes} addQuote={addQuote}></Quotes>
        <Quote path="/quote/:id" getQuote={getQuote} ></Quote>
      </Router>
      </div>
      </div>
    </>
  );
}



export default App;
