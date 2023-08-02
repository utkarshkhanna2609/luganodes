import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let todo={
  id:1
}



function App() {
  const [todo, setTodo] = useState({
  });

  setInterval(()=>{
    setTodo({
      title:"HELO WORLD",
      description:"",
      id:2
    })
  },1000)


  return(
    <div>
      {todo.title}
    </div>
  )
}

function Todo(props){
  return <div>
    {props.title}
    {props.description}
  </div>
}


export default App;
