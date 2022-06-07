import React from "react";

const Keypad = ({setResult, result, buttons}) => {

    const handleClick = (e) => {
        e.preventDefault();
       setResult(result.concat(e.target.name))
    }

    const clearResult = (e) => {
        e.preventDefault();
        setResult("");
    }

    const backspace = (e) => {
        e.preventDefault();
        setResult(result.substring(0, result.length - 1));
    }

    const calculeResult = (e) => {
        e.preventDefault();

        try{
            setResult(eval(result).toString())
        }catch(err) {
            setResult(`Error`);
        }
    }

  return (
    <div className="keypad">
      <button className="specialButtons" id="clear" onClick={clearResult}>Clear</button>
      <button className="specialButtons" id="backspace" onClick={backspace}>C</button>
      <button className="specialButtons" name="/" onClick={handleClick}>&divide;</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button className="specialButtons" name="*" onClick={handleClick}>&times;</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button className="specialButtons" name="-" onClick={handleClick}>&ndash;</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button className="specialButtons" name="+" onClick={handleClick}>+</button>
      <button name="0" onClick={handleClick}>0</button>
      <button name="." onClick={handleClick}>.</button>
      <button className="specialButtons" id="result" onClick={calculeResult}>=</button>
    </div>
  );
};

export default Keypad;
