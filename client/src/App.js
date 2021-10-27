import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/quotes`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Quotr</h1>
      <p>Data from server:</p>
      <ul>
        {data.map((item) => {
          return (
            <li key={item._id}>
              {item.title}
              {item.author}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
