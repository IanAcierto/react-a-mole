import React, { useEffect } from 'react'
const mole = 'https://raw.githubusercontent.com/HackerUSA-CE/RR-React-A-Mole-Images/main/mole.png'
const Mole = (props) => {
  console.log(`render mole ${props.key}`)
  //timer
  useEffect(()=>{
    let random = Math.floor(Math.random() * 2500)
    let timer = setTimeout(()=>{
      props.toggle(false)
    }, random)
    //cleanup
    return()=>{
      clearTimeout(timer)
    }
  })
  return (
    <div><img style={{'width': '30%'}}src={mole} onClick={props.handleClick}/></div>
  )
}

export default Mole