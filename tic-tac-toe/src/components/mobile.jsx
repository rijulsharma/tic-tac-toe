import React, { useState } from 'react'
import '../component-styles/Mobile.css';
import small_cross from '../assets/cross_small.png';
import small_zero from '../assets/zero_small.png';
import Game from './Game';

function Mobile() {
  const [picked,setPicked] = useState(false);
  const [userChoice, setUserChoice] = useState('');
  return (
    <div>
        <div className='mobile-screen'>
        {picked ? (
          <div className='mobile-content'>
             <Game usersChoice={userChoice}></Game>
          </div>
         
        ) : (
            <div className='mobile-content'>
              <div className='logo'>
                
                <img src = {small_cross}></img>
                <img src = {small_zero}></img>
              </div>
              <br></br>
              <div className='pick-player'>
                <p>PICK PLAYER</p>
                <div className='pick-buttons'>
                  <button className='pick-cross' onClick={() => setUserChoice('cross')} ></button>
                  <button className='pick-zero' onClick={() => setUserChoice('zero')}></button>
                </div>
                
              </div>
              <br></br>
              <br></br>
              <button className='mobile-button' onClick={() => setPicked(true)}>NEW GAME ( VS CPU )</button>
              <br></br>
              <br></br>
              <button className='mobile-button button1' onClick={() => setPicked(true)}>NEW GAME ( VS HUMAN ) Coming soon</button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <button className='button2 '>Invite your friend</button>
              </div>
              )}
        </div>
    </div>
  )
}

export default Mobile




// if userChoice == 'cross'