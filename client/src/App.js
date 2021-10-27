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

  function getQuote(id) {
    return quotes.find(quote => quote.id === parseInt(id));
  }


  return (
    <>
      <Navigation></Navigation>
      <Router>
        <Quotes path="/" data={quotes} ></Quotes>
        <Quote path="/quote/:id" getQuote={getQuote} ></Quote>
      </Router>
    </>
  );
}

export default App;
