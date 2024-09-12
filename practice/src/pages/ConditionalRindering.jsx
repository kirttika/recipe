import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const ConditionalRindering = () => {

    const [x, stex] =useState(false)
    const handleClick = () =>{
        stex (!x)
    }
  return (
    <div>
     {x &&<h1>This is one</h1>} 
     {!x &&<h1>This is Two</h1>} 
      
      <button onClick={handleClick}>click</button>

  {x && <form action="className" style={{backgroundColor: 'pink'}}>
    <fieldset>
        <label htmlFor="name"></label> <br />
        <input type="text" />
        <label htmlFor="name"></label> <br />
        <input type="text" />
        <label htmlFor="name"></label> <br />
        <input type="text" />
        <label htmlFor="name"></label> <br />
        <input type="text" />
    </fieldset>
        </form>}
    </div>
  )
}

export default ConditionalRindering
