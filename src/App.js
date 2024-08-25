import logo from './logo.svg';
import './App.css';
import { Route ,Routes,Link } from 'react-router-dom';

import { useState,useEffect } from 'react';
import Data from './compenent/data';
import High from './compenent/high';



function App() {
  const [val,setval]=useState("");
  const [clk,setclk]=useState(false);


  
  return (
    <>
    <High val={val} setval={setval}/>
  
    
    
    <Routes>
      <Route path='data' element={<Data val={val}/>}/>
    </Routes>

    </>
    
   
  );
}

export default App;
