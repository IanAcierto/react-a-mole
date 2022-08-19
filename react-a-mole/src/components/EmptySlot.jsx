import {useEffect} from 'react'
const moleHill = 'https://raw.githubusercontent.com/HackerUSA-CE/RR-React-A-Mole-Images/main/molehill.png'
const EmptySlot = (props) => {
  console.log(`render Empty ${props.key}`)
  //timer
  useEffect(()=>{
    let random = Math.floor(Math.random() * 2500);
    let timer = setTimeout(() => {
      props.toggle(true)
    }, random)
    return ()=>clearTimeout(timer)
  })
  return (
    <div>
      <img style = {{'width': '30%'}}src={moleHill}/>
    </div>
  )
}

export default EmptySlot