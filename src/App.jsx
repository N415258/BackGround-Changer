import { useState } from 'react'
import './App.css'


// function App() {
//   const [count, setCount] = useState(20)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <h2>Counter is: {count}</h2>

//         <button onClick={() => setCount((count) => count + 1)} className='btn btn-success'>
//           AddCounter
//         </button>
//         <br/>
//         <button style={{marginTop:'5px'}} onClick={() => setCount((count) => count - 1)} 
//         className='btn btn-danger'
//         >
//           RemoveCounter
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default function BgChanger() {
  const [color,setcolor] = useState("white");
  return (    
      <div className='card rounded' style={{backgroundColor:color}}>      
        <div className='card-body'>
        <h2>Back-Ground Changer</h2>
          <div className='btngroup mt-4'>
            <button className='btn btn-danger' onClick={() => setcolor("red")} >Red</button>
            <button className='btn btn-success' onClick={() => setcolor("Green")}>Green</button>
            <button className='btn btn-warning' onClick={() => setcolor("orange")}>Orange</button>
            <button className='btn btn-primary' onClick={() => setcolor("blue")}>Blue</button>
          </div>
        </div>
      </div>

    
  )
}

//  export default App


