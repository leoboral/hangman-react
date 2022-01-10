import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import PopUp from './components/PopUp';
import Notification from './components/Notification'
import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  // eslint-disable-next-line no-unused-vars
  const [playable, setPlayable] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [correctLetters, setCorrectLetters] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [wrongLetters, setwrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
              // showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setwrongLetters(wrongLetters => [...wrongLetters, letter])
            } else {
              // showNotification();
            }
          }
        }
      }
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);

    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
      setPlayable(true);

      // empty arrays

      setCorrectLetters([]);
      setwrongLetters([]);

      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
    }

  return (
    <>
      <Header/>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification />
    </>
  );
}

export default App;
