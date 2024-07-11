import React, { useState } from 'react';
import Display from './Components/Display';
import Numpad from './Components/Numpad';

function App() {
  const [current, setCurrent] = useState('');
  const [result, setResult] = useState(0);


  const calculateResult = (inputString) => {
    let res = 0;
    console.log("inputString",inputString);
    console.log("Current Value (1)",current);
    
    const values = inputString?.match(/\d+|[+\-*\/]/g);

    if (!values) return 0; // Return early if input is invalid or empty

    const numericValues = values?.map(item => /\d+/.test(item) ? Number(item) : item);


    numericValues?.map((item, index) => {
      if (item === "+") {
        res = res === 0 ? numericValues[index - 1] + numericValues[index + 1] : res + numericValues[index + 1]
        
      }
      if (item === "-") {
        res = res === 0 ? numericValues[index - 1] - numericValues[index + 1] : res - numericValues[index + 1]
      }
      if (item === "*") {
        res = res === 0 ? numericValues[index - 1] * numericValues[index + 1] : res * numericValues[index + 1]
      }
      if (item === "/") {
        if (numericValues[index + 1] !== 0) {
          res = res === 0 ? numericValues[index - 1] / numericValues[index + 1] : res / numericValues[index + 1]
        }
        else {
          console.log("Zero Divide error");
        }
      }


    });

    console.log('Result:', res);
    return res;
  };

  const handleInputString = (inputString) => {
    const calculatedResult = calculateResult(inputString);
    setResult(calculatedResult);
    setCurrent(inputString);
    console.log("Current Value (2)" ,current);
  };

  
  
  console.log("Current Value (0)",current);
  return (
    <div className='bg-gray-800 flex   item-center justify-center h-[100vh]'>
      <div className=' bg-black shadow-xl shadow-black p-5 border-red-500 h-5/6'>
      <Display res={result} curr={current} />
      <Numpad giveString={handleInputString}  />
    </div></div>
  );
}

export default App;
