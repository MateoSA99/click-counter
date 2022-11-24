import freeCodeLogo from './images/freecodecamp-logo.png';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {

  const [clickNumbers, changeClickNumber] = useState(0);

  const manageClick = () => {
    changeClickNumber(clickNumbers + 1);
  }

  const resetCounter = () => {
    changeClickNumber(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
        src={freeCodeLogo}
        alt='logo'/>
      </div>
      <div className='principal-container'>
        <Counter clickNumber= {clickNumbers} />
        <Button
        text='Click'
        isClickButton={true}
        manageClick={manageClick} />
        <Button
        text='Reset'
        isClickButton={false}
        manageClick={resetCounter} />

      </div>
    </div>
  );
}

export default App;
