import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import './App.css'
import { HangedImage } from './components/HangedImage'
import {randomWord} from './helpers/randomWord'

function App() {

  const [word, setWord] = useState (randomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat( word.length ));
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  const [attempts, setAttempts ] = useState(0);

  useEffect( () => {
    if (attempts >= 9 ) {
      setLose( true );
    }
  }, [attempts]);

  useEffect ( () => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word){
      setWon (true);
    }


  })

  const newGame = () => {
    const newWord = randomWord()


    setWord( newWord );
    setHiddenWord('_ '.repeat( newWord.length ));
    setAttempts(0);
    setLose(false);
    setWon(false);

  }



  const checkLetter = ( letter : string) => {
    if ( lose ) return;
    if ( won ) return;

    if (!word.includes (letter)) {
      setAttempts( Math.min (attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');


    for (let i =0; i < word.length; i++){
      
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }

    }
    
    setHiddenWord(hiddenWordArray.join(' '));



  }



  return (
    <div className='App'>
     
    {/* imagen */}
    <HangedImage imageNumber={attempts} />
    {/* palabra */}
    <h3> {hiddenWord} </h3>

    {/* intentos */}
    <h3>intentos: {attempts} </h3>

    {/* mensaje si perdio */}
    {
      ( lose ) ? 
      <h2>PERDISTE PEDAZO DE BOT ERA: {word}</h2>
      : ''
    }

    {/* mensaje si gano */}
    {
      ( won ) ?
      <h2>GANASTE PAPAAA</h2>
      :''
    }


    {/* botones */}
    {
      letters.map(  (letter) => (
        <button
          onClick={() => checkLetter(letter)}
          key={ letter }>
          { letter }
          </button>
      ))
    }

    <br /><br />

    <button onClick={() =>newGame()}>Otra vez?</button>

    </div>
  )
}

export default App
