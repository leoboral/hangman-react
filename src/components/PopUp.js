import React, {useEffect} from 'react'
import { checkWin } from './helpers/Helper'

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord, setPlayable) === 'win') {
    finalMessage = 'Congratulations! You are a crack :)';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord,) === 'lose') {
    finalMessage = 'Unfornately you lost! :('
    finalMessageRevealWord = `The word was... ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));


    return (
        <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
}

export default PopUp
