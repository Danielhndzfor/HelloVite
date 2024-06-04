//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function Hello(props: any) {
  // Quitar el tipo any implicitamente
  console.log(props);
  return (
    /* <div>
      <p>Hello World</p>
    </div> */
    /* <div>
      <p>Hello {props.name}</p>
    </div> */
    <div>
      <p>Hello {props.name}, you were {props.age} years old.</p>
    </div>
  );
}

function App() {
  /* //const [count, setCount] = useState(0)
  const now = new Date();
  const a = 10
  const b = 20
  console.log(now, a + b)
  return (
    <div>
      <p>Hello World!, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  ) */
  return(
    <div>
      <p>Greetings</p>
      <Hello name="Daniel" age="84" />
      <Hello name="Hernandez" age={48} />
      <Hello name="For" age={62} />
    </div>
  );
}

export default App
