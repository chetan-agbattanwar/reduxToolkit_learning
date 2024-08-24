import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {toggleColor} from '../src/rtk/slice/toggleSlice'

function App() {
  const body = document.querySelector('body')

  const color = useSelector(state=>state.color)
  // const backGround = useSelector(state=>state.backGround)
  // console.log(backGround);
  const dispatch = useDispatch()

  return (
    <div style={{color: color==='light'?'#fff' : '#333', background:color==='light'?'#333':'#fff'}}>
      <h1>toggle with redux toolkit</h1>
      <button onClick={()=>dispatch(toggleColor())}>theme changer</button>
    </div>
  )
}

export default App
