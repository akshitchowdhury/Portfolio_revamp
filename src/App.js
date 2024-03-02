
import './App.css';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <Router>
       
      
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Conatct/>} /> */}
        {/* 
        <Route path="/services" element={<Services/>} />
        
        <Route path="/contact" element={<Contact/>} /> */}

        {/*         
        */}

      </Routes>
      </Router>
    </div>
  );
}

export default App;
