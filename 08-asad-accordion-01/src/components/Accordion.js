import React, { useState } from 'react'
import { Data } from './Data'
import './According.css'

const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const  toggleHandler = index => {
    if(clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <div className='container'>
      <h1> Interview Questions</h1>
      {
        Data.map((item, index) => {
          return (
            <>
            <div 
            onClick={() => toggleHandler(index)} 
            key={index} 
            className='question'>
              <h3>{item.question}</h3>
              <span>{clicked === index ? <box-icon name='minus' ></box-icon> : <box-icon name='plus'></box-icon>}</span>
            </div>
            {
              clicked === index ? (
                <div className="answer">
              <h4>{item.answer}</h4>
            </div>
              ) : null
            }
            </>

          )
        })
      }
    </div>
  )
}

export default Accordion