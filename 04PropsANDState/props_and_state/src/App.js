import React , {useState} from "react"
import './App.css'

const App = () => {
  const [count,setCount]=useState(0);
    return ( 
      <div className="App">
        <header>
          <h1>Current value of counter {count}</h1>
        </header>
        <button onClick={()=>(setCount(0))} className="button">Reset</button>
        <button onClick={()=>(count>10? "":setCount(count+1))} className="button">Increment</button>
        <button onClick={()=>(count<=0 ? "":setCount(count-1))} className="button">Decrement</button>
      </div>
      )
}

export default App;