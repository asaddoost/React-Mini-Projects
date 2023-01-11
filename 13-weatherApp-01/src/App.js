import React from "react";
import Weather from "./components/Weather";
import Time from "./components/Time";
import DateToday from "./components/Date";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
     
     <Weather />
     <Time />
     <DateToday/>
     <Quote />
    </div>
  );
}

export default App;
