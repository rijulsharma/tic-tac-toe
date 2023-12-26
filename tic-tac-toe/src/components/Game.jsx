import React, { useState } from 'react'
import '../component-styles/Game.css'
import zero from '../assets/zero.png';
import cross from '../assets/cross.png';
import small_cross from '../assets/cross_small.png';
import small_zero from '../assets/zero_small.png';
function Game({usersChoice}) {
    const [isFilled, setIsFilled] = useState(false)
    const [imageSource, setImageSrc] = useState(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    function showChoice(){
        if(isFilled == false){
            setIsFilled(true);

            if(usersChoice === 'cross'){
                setImageSrc(cross);
                setIsImageVisible(!isImageVisible);
            }
            else 
            {
                setImageSrc(zero);
                setIsImageVisible(!isImageVisible);
            }
        }
         
    }
    
  return (
    <div>
        <div className='row'>
        <div className='logo'>
                
                <img src = {small_cross}></img>
                <img src = {small_zero}></img>
              </div>
              <div className='turn'><p>X TURN</p></div>
              <div className='refresh'></div>
        </div>
        <div className='row'>
        <div className='game-box' onClick={() => showChoice()}>
        {isImageVisible && <img src={imageSource} alt='User Choice' /> }
        </div>
        <div className='game-box' onClick={showChoice()}></div>
        <div className='game-box' onClick={showChoice()}></div>
        </div>
        <div className='row'>
        <div className='game-box' onClick={showChoice()}></div>
        <div className='game-box' onClick={showChoice()}></div>
        <div className='game-box' onClick={showChoice()}></div>
        </div>
        <div className='row'>
         <div className='game-box' onClick={showChoice()}></div>
         <div className='game-box' onClick={showChoice()}></div>
         <div className='game-box' onClick={showChoice()} ></div>
        </div>
        <div className='row'>
            <div className='scorecard card1'>X(YOU) 0</div>
            <div className='scorecard card2'>TIES  0</div>
            <div className='scorecard card3'>0(CPU) 0</div>
        </div>
       
    </div>
  )
}

export default Game;