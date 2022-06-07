import { useState } from 'react';
import "./App.css";

import Input from './components/Input/Input';
import Keypad from './components/Keypad/Keypad';

function App() {
const [result, setResult] = useState("");


  return (
    <div className='container'>
      <Input result={result}/>
      <Keypad result={result} setResult={setResult}/>
    </div>
  );
}


export default App;