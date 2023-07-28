import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Investment from './pages/Investment';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          {/* <Route path='/about' exact component={About}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/investment' exact component={Investment}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
