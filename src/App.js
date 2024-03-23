
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ContactComponent from './components/Contact/ContactComponent';

function App() {
  return (
    <div className="App overflow-x-hidden" >

   
    <Router>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactComponent/>} />
        {/* 
        
        <Route path="/contact" element={<Conatct/>} /> */}
        {/* 
        <Route path="/services" element={<Services/>} />
        
        <Route path="/contact" element={<Contact/>} /> */}

        {/*         
        */}

      </Routes>
      <Nav/>       
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
