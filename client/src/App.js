
import { Routes, Route } from "react-router-dom";
import User from './components/User/User';
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<User />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
