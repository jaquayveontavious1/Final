
import './index.css';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import School from './components/School';
import Update from './components/Profiles/Update';
import BookingRoutes from './components/Booking/BookingRoutes';
import BusTracking from './components/Tracking/BusTracking';
function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/signup' Component={Register}/>
            
            <Route path='/profile' Component={Profile} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/schools' Component={School} />
            <Route path='/update-profile' Component={Update} />
            <Route path='/routes' Component={BookingRoutes} />
            <Route path='/tracking' Component={BusTracking} />
           
            
          </Routes>
            
      </Router>
   
    </>
  )
}
  


export default App
