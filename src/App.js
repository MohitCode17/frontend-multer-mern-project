import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
