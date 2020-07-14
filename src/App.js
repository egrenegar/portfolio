import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
    
  );
}

export default App;

