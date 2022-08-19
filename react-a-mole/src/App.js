import {useState, useEffect} from 'react'
import EmptySlot from './components/EmptySlot'
import mole from './components/Mole'
import MoleContainer from './components/MoleContainer'
function App() {
  const [score, setScore] = useState(0)
  //generate mole containers
  const createMoleHill = () =>{
    let hills = []
    for (let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer 
          key = {i}
          setScore = {setScore}
          score = {score}/>
      )
    }
    console.log(hills)
    return <div>{hills}</div>
  }
  return (
    <div>
    <h1>React-a-Mole!</h1>
    {score}
    {createMoleHill()}
    </div>
  );
}

export default App;
