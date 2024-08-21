import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Parent from './Parent/Parent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/parent' element={<Parent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
