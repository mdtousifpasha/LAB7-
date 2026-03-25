import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('Loading an interesting fact...');

  // Function to fetch data from the free Numbers API
  const fetchNumberFact = async () => {
    setFact('Loading...');
    try {
      // Fetching a random math fact
      const response = await fetch('http://numbersapi.com/random/math');
      const data = await response.text();
      setFact(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setFact('Oops! Could not fetch a fact right now.');
    }
  };

  // Fetch a fact immediately when the app loads
  useEffect(() => {
    fetchNumberFact();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Number Facts PWA</h1>
        <p>A simple offline-ready app fetching data from an API.</p>
      </header>
      
      <main className="card">
        <p className="fact-text">{fact}</p>
        <button className="fetch-button" onClick={fetchNumberFact}>
          Get Another Fact
        </button>
      </main>
    </div>
  );
}

export default App;