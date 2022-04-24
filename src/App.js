import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx'
import Home from "./components/Home";
import './App.css';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import Login from './components/LoginSignup';
import About from './components/About';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactForm/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  
      <Footer/>
    </>
  );
}
export default App;