import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'
function App() {
  let [disVal, setdisVal] = useState("");
  const onButtonClick = (e,btn) => {
    // console.log(e.target.innerText+", btn= "+ btn);
    if(btn === 'C') {
      setdisVal("");
    }
    else if (btn === '=') {
      const result = eval(disVal);
      setdisVal(result);
    } else {
        const newDisVal = disVal + btn;
        setdisVal(newDisVal);
    }
  }
  return (
    <>
      <center>
        <div className='main-container'>
          <Display disVal={disVal} />
          <Buttons onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  )
}

export default App
