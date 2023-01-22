import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

const Star = ({ selected=false, onSelect }) =>{
  return <FaStar 
  size="3rem"
  color={selected ? '#FFEA20' : '#DDDDDD'}
  onClick={onSelect}

  />

}

const StarRating = ({ totalStars=5 }) => {
    const [selectedStar, setSelectedStar ] = useState(0);

    return  <>
      {
        createArray(totalStars).map((item, id) => 
      <Star 
      
      key={id}
      selected={selectedStar > id}
      onSelect={() =>setSelectedStar(id + 1) }/>
    )}
    <p>{selectedStar} of {totalStars}</p>
    </>
}

function App() {
  

  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
