import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import BookData from "./Data.json"


function App() {
  return (
    <div className="App">
    <SearchBar placeholder="Search Your Book..." data={BookData}/>
    </div>
  );
}

export default App;
