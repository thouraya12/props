import React from 'react'

const Func = ({adress , name , age, handleClick,src} ) => {
   
  return (
    <div>
    
    <h1> {name} {age} {adress}  </h1>
    <button onClick ={handleClick}> click me </button>
    <img src={src} alt=" "/>
    </div>
  
  )
}

export default Func