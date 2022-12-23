import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

const URL = 'https://api.adviceslip.com/advice';

const App = () => {
  const [advice,setAdvice] = useState('');
  useEffect(() => {
    fetchAdvice()
  }, [])
  
  const fetchAdvice = () =>{
    axios.get(URL)
    .then((response)=>{
      const {advice} = response.data.slip;
      setAdvice(advice);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={()=>fetchAdvice()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  )
}

export default App