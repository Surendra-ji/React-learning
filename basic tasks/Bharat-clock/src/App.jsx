import './App.css'
import ClockName from './components/ClockName';
import ClockQuote from './components/ClockQuote';
import ClockDateTime from './components/ClockDateTime';

function App() {
  return (
    <>
      <center>
        <ClockName/>
        <ClockQuote/>
        <ClockDateTime/>
      </center>
    </>
  )
}

export default App
