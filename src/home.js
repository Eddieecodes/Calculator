import { useState } from "react";

const Home = function Calculator() {
        const [value, setValue] = useState('');
       
        // Function to handle button click and update the value
        const handleClick = (e) => {
          setValue(value.concat(e.target.name));
        };

        // eslint-disable-next-line no-eval
        const calculateAnswer = () => {
           setValue(eval(value).toString());
        };
        const clearClick = () => {
          setValue("");
        }
        const deleteClick = () => {
           setValue(value.slice(0, -1));
        }

    return (
        <div className="home">
      <div className="container">
        <div className="displaycontainer">
          <div className="answerdisplay"></div>
          <div className="valuedisplay" >{value}</div>
        </div>

        <div className="buttoncontainer">
          <button className='firstbutton' id="clearClick" onClick = {clearClick}> C </button>
          <button className='firstbutton' id="deleteClick" onClick = {deleteClick}>DEL</button>
          <button className='firstbutton' name="%"  onClick = {handleClick}>%</button>
          <button className='thirdbutton' name="/" onClick = {handleClick}>/</button>
          <button className='secondbutton' name="7" onClick = {handleClick}>7</button>
          <button className='secondbutton' name="8" onClick = {handleClick}>8</button>
          <button className='secondbutton' name="9" onClick = {handleClick}>9</button>
          <button className='thirdbutton' name="*" onClick = {handleClick}>*</button>
          <button className='secondbutton' name="4" onClick = {handleClick}>4</button>
          <button className='secondbutton' name="5" onClick = {handleClick}>5</button>
          <button className='secondbutton' name="6" onClick = {handleClick}>6</button>
          <button className='thirdbutton' name="-"  onClick = {handleClick}>-</button>
          <button className='secondbutton' name="1" onClick = {handleClick}>1</button>
          <button className='secondbutton' name="2" onClick = {handleClick}>2</button>
          <button className='secondbutton' name="3" onClick = {handleClick} >3</button>
          <button className='thirdbutton' name="+" onClick = {handleClick}>+</button>
          <button className='secondbutton-span' name="0" onClick = {handleClick}>0</button>
          <button className='secondbutton' name="." onClick = {handleClick}>.</button>
          <button className='thirdbutton'  onClick={calculateAnswer}>=</button>
        </div>
      </div>
    </div>
     );
}

export default Home;