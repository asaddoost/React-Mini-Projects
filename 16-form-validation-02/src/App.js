import React from "react";
import './App.css';
import FirstMethodForm from "./components/FirstMethodForm";
// import SecondMethodForm from "./components/SecondMethodForm";


function App() {
  return (
    <div className="App vw-100 vh-100 d-flex justify-content-center">
     <FirstMethodForm />
     {/* <SecondMethodForm /> */}
    </div>
  );
}

export default App;
