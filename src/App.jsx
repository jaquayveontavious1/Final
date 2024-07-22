
import './index.css';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import  Login  from './components/Login';
import Register from './components/Register';
import Profile from './components/Profiles/Profile';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/signup' Component={Register}/>
            <Route path='/login' Component={Login} />
            <Route path='/profile' Component={Profile} />
            <Route path='/dashboard' Component={Dashboard} />
            
          </Routes>
            
      </Router>
   
    </>
  )
}
  


export default App
