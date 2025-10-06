/* import { useState } from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css' 

function App() {
  const [count, setCount] = useState(0) 
  
  return (
     <> <div>
       <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
         </a> 
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
           </a> 
           </div> 
           <h1>Vite + React</h1> 
           <div className="card">
             <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
                </button>
                 <p>
                   Edit <code>src/App.jsx</code> and save to test HMR 
                   </p> 
                   </div> 
                   <p className="read-the-docs"> 
                    Click on the Vite and React logos to learn more 
                    </p> 
                   </> 
                    ) 
       //           } 
    //  export default App
 */



import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";  
import About from "./pages/About";
import Logement from "./pages/Logement";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;