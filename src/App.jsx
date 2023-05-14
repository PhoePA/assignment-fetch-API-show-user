import React, { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Fetch API data using useEffect hook
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const checkedNum = apiData.filter((item) => item.id === parseInt(userInput));
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter A Number within 1 and 200"
      />

      <ul>
        {checkedNum.map((item) => (
          <div>
            <h2>Your typed Number is - {userInput}</h2>
            <p key={item.id}>
              <strong>The Title of the Item is</strong> - " {item.title} ".
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
