import './App.css';
import React, { useState } from 'react';
function App() {
  const [dictionary] = useState([
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' }
  ]);


  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');


  const handleSearch = () => {
    const wordEntry = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());

    if (wordEntry) {
      setResult(`${wordEntry.meaning}`);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>


      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
        style={{ padding: '10px', width: '200px', fontSize: '16px' }}
      />


      <button
        onClick={handleSearch}
        style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}
      >
        Search
      </button>


      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <h5>Defination: </h5>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
