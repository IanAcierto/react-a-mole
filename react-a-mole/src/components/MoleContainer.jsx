import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
const MoleContainer = (props) => {
  const [mole, setMole] = useState(false)
  //handleClick
  const handleClick = ()=>{
    props.setScore(props.score + 1)
    setMole(false)
  }

  let displayMole = mole ? <Mole setScore={props.setScore} toggle = {setMole} handleClick = {handleClick} /> : <EmptySlot toggle={setMole}/>
  return (
    <>{displayMole}</>
  )
}

export default MoleContainer