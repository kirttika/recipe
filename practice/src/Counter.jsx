import React, { useState } from 'react'

const Counter = () => {

  // let x = 10
  const [x, setx] = useState(10);
  console.log(x);

  const handleIncrement = ()=>{
    console.log("running");
    setx(x++)
  }
  return (
    <div>
      This is counter application
      <p>value: {x}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      
    </div>
  )
}

export default Counter