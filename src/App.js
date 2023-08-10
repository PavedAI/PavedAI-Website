import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Products';
import Investment from './pages/Investment';
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About  />}/>
          <Route exact path='/products' element={<Product />}/>
          <Route exact path='/invest' element={<Investment />}/>
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
