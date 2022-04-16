
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx'
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Home/>
      <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;