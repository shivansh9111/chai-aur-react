import { useState } from 'react';
import './App.css'

function App() {
  //let counter = 15;
  let [counter, setCounter]= useState(15)

  const addValue= () => {
    //counter = counter+1
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) or
     setCounter(prevCounter => prevCounter +1) 
     setCounter(prevCounter => prevCounter +1)
     setCounter(prevCounter => prevCounter +1)
     setCounter(prevCounter => prevCounter +1);}
const removeValue= () => {
setCounter(counter-1);
}
  return(<> <h1>chai aur react</h1>

  <h2>counter value :{counter}</h2>
  <button onClick={addValue}>add value</button>
  <br />
  <button onClick={removeValue}>remove value</button>
  </>)
}

export default App
