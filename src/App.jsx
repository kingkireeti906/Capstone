import React from 'react';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagea from './Pagea';

import Pageb from './pageb'; 
import Movies from './Movies'; 
import List from './List';
import Counter from './CountdownTimer'



function App() {
  return (
    <> 


  
<BrowserRouter basename="/capstone">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="page" element={<Pagea />} />
          <Route path="pageb" element={<Pageb />} />
          <Route path="Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>

   
    </>
  );
}

export default App;
