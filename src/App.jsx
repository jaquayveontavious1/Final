
import './index.css';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingBus from './components/Booking/BookingBus';
import Register from './components/Register';

import Dashboard from './components/Dashboard';
import School from './components/School';
import Update from './components/Profiles/Update';
import BookingRoutes from './components/Booking/BookingRoutes';
import BusTracking from './components/Tracking/BusTracking';
import About from './components/About';
import Confirmation from './assets/Confirmation';
import BookingSeat from './components/Booking/BookingSeat';
import Security from './components/Security';
function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/signup' Component={Register}/>
            
            
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/schools' Component={School} />
            <Route path='/update-profile' Component={Update} />
            <Route path='/routes' Component={BookingRoutes} />
            <Route path='/tracking' Component={BusTracking} />
            <Route path='/about' Component={About} />
            <Route path='/buses/:route_number' Component={BookingBus} />
            <Route path='/seats/:bus_number' Component={BookingSeat} />
            <Route path='/confirm/:bus_number/:seat_number' Component={Confirmation} />
            <Route path='/security' Component={Security} />
            
          </Routes>
            
      </Router>
   
    </>
  )
}
  


export default App
