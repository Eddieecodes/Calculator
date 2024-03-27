import { useState } from "react";
import Display from "./display";

const Home = function Calculator() {
        const [value, setValue] = useState('');

        // const [hasClickedIsEqualTo, setHasClickedIsEqualTo] = useState(false);
       
        // Function to handle button click and update the value
        const handleClick = (e) => {
          setValue(value.concat(e.target.name));
        };

       
        const calculateAnswer = () => {
          try{
            // eslint-disable-next-line no-eval
            setValue(eval(value).toString());
            // setHasClickedIsEqualTo(true);
          }catch(err){
            setValue("error")
          }
        };

        //function to clear the numbers
        const clearClick = () => {
          setValue("");
        }

        //function to delete a number from behind
        const deleteClick = () => {
           setValue(value.slice(0, -1));
        }
//array of buttons
        const buttonNumbers = [
          { name : "%" , buttonClass : "firstbutton"},
          { name : "/" , buttonClass : "thirdbutton"},
          { name : "7" , buttonClass : "secondbutton"},
          { name : "8" , buttonClass : "secondbutton"},
          { name : "9" , buttonClass : "secondbutton"},
          { name  : "*", buttonClass : "thirdbutton"},
          { name : "4" , buttonClass : "secondbutton"},
          { name : "5" , buttonClass : "secondbutton"},
          { name : "6" , buttonClass : "secondbutton"},
          { name  : "-", buttonClass : "thirdbutton"},
          { name : "1" , buttonClass : "secondbutton"},
          { name : "2" , buttonClass : "secondbutton"},
          { name : "3" , buttonClass : "secondbutton"},
          { name  : "+", buttonClass : "thirdbutton"},
          { name : "0" , buttonClass : "secondbutton-span"},
          { name : "." , buttonClass : "secondbutton"},
        ]

    return (
        
      <>
       <Display value={value}/>
        <div className="buttoncontainer">
         
          <button className='firstbutton' id="clearClick" onClick = {clearClick}> C </button>
          <button className='firstbutton' id="deleteClick" onClick = {deleteClick}>DEL</button>
          {
            buttonNumbers.map(buttonNumber => {
              
              return(
                <button className= {buttonNumber.buttonClass} name={buttonNumber.name} key={buttonNumber.name} onClick = {handleClick}>{buttonNumber.name}</button>
              )
            })
          }

         
          <button className='thirdbutton'  onClick={calculateAnswer}>=</button>
        </div>
        </>
     
     );
}

export default Home;