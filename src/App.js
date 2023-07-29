import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Product from './pages/Products';
// import Investment from './pages/Investment';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          {/* <Route path='/product' element={<Product />}/>
          <Route path='/investment' element={<Investment />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
