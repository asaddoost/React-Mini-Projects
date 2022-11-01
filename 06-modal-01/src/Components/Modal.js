import React from 'react'
import './Modal.css'

const Modal = ( {closeModal}) => {
  return (
    <>
      <div 
      className='overlay'
      onClick={() => closeModal(false)}>
      <div className='modal-container'>
        <i 
        className='bx bx-x'
        onClick={() => closeModal(false)}
        ></i>
        <h1>Are you sure you want to continue?</h1>
        <h4>The next page lok amazing. Hope you want to go there.</h4>
        <div className="btn-box">
            <button 
            className='red-btn btn'
            onClick={() => closeModal(false)}
            >Cancel</button>
            <button className='green-btn btn'>Continue</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Modal