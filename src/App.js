import './styles.scss'
import {BsFillDice5Fill, BsPauseFill} from 'react-icons/bs'
import {  useState } from 'react'
import axios from 'axios'

function App() {
  const [slip, setslip] = useState({id:'00',advice:'blank'})

  async function getAdvice() {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice');
    setslip(response.data.slip)

  } catch (error) {
    console.error(error);
  }
}

  
    

  return (
    <div className="App">
      <div className='card'>
        <span>ADVICE #{slip.id}</span>
        <p>"{slip.advice}"</p>
        <div className='play'>
          <div className='line'></div>
          <div className='playbtn'><BsPauseFill/></div>
          <div className='line'></div>
        </div>
        <div className='logo' onClick = {getAdvice} >
          <div><BsFillDice5Fill/></div>
        </div>
      </div>
    </div>
  );
}
export default App
