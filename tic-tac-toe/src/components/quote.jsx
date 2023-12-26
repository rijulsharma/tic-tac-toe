import React from 'react'
import ellipse from '../assets/Ellipse 1.png';
import logo from '../assets/Group 3.png';
import '../component-styles/Quote.css';
function Quote({QuoteText}) {
  return (
    <div>
       <div className='quote-box'>
        <p className='quote-no'>Quote #1</p>
        
        <p className='quote-text'>{QuoteText}</p>
        <div className='quote-logo'>
            <img src={ellipse}></img>
            {/* <img src={logo}></img> */}
        </div>
        </div> 
    </div>
  )
}

export default Quote;