
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden">

   
    <Router>
    <Nav/>        
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* 
        
        <Route path="/contact" element={<Conatct/>} /> */}
        {/* 
        <Route path="/services" element={<Services/>} />
        
        <Route path="/contact" element={<Contact/>} /> */}

        {/*         
        */}

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
