import React, { useState}from 'react'
import Modal from './Modal'
import './App.css';



function App() {
  const[openModal, setOpenModal] = useState(false);

  return (
    <>
        <div className='header'>
            <h1>Hey, click on the button to open the modal</h1>
            <button 
            className='btn'
            onClick={() => {setOpenModal(true)}}
            >open</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
        
    </>
  )
}

export default App;
