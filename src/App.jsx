import { useState } from 'react'
import './index.css';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import  Login  from './components/Login';
import Register from './components/Register';

function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/signup' Component={Register}/>
            <Route path='/login' Component={Login} />
            
          </Routes>
            
      </Router>
   
    </>
  )
}
  


export default App
