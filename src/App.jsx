
import './index.css';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import  Login  from './components/Login';
import Register from './components/Register';
import Profile from './components/Profiles/Profile';
import Dashboard from './components/Dashboard';
import School from './components/School';
import Update from './components/Profiles/Update';
import BookingRoutes from './components/Booking/BookingRoutes';
import BookingBus from './components/Booking/BookingBus';
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
            <Route path='/schools' Component={School} />
            <Route path='/update-profile' Component={Update} />
            <Route path='/routes' Component={BookingRoutes} />
            <Route path='/buses' Component={BookingBus} />
            
          </Routes>
            
      </Router>
   
    </>
  )
}
  


export default App
