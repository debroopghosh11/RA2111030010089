import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState(null);

  const fetchData = async (type) => {
    try {
      const res = await axios.get(`http://localhost:5000/numbers/${type}`);
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData('p')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchData('fibo')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchData('e')}>Fetch Even Numbers</button>
      <button onClick={() => fetchData('rand')}>Fetch Random Numbers</button>

      {response && (
        <div>
          <p>Window Previous State: {JSON.stringify(response.windowPrevState)}</p>
          <p>Window Current State: {JSON.stringify(response.windowCurrState)}</p>
          <p>Numbers: {JSON.stringify(response.numbers)}</p>
          <p>Average: {response.avg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
