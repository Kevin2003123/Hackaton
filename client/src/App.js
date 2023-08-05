
import { Routes, Route } from "react-router-dom";

import User from './components/User/User';
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './components/UserDashboard/UserDashboard'
import PastOrders from './components/UserDashboard/PastOrders/PastOrders';
import SuperDashboard from './components/SuperDashboard/ReceiveOrders/ReceiveOrders';
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<User/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userDashboard" element={<Header/>} />
        <Route exact path="/userDashboard/pastOrders" element={<PastOrders/>} />
        <Route exact path="/superDashboard" element={<SuperDashboard/>} />
      </Routes>
   
  );
}

export default App;
