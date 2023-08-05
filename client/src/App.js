
import './App.css';
import { Routes, Route } from "react-router-dom";
import User from './components/User/User';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './components/UserDashboard/UserDashboard'
import PastOrders from './components/UserDashboard/PastOrders/PastOrders';
function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<User/>} />
        <Route exact path="/userDashboard" element={<Header/>} />
        <Route exact path="/pastOrders" element={<PastOrders/>} />
      </Routes>
   
  );
}

export default App;
