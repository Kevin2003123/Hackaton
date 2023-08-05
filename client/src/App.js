
import { Routes, Route } from "react-router-dom";
import User from './components/User/User';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<User />} />
    </Routes>

  );
}

export default App;
