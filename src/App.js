import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/portfolio' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/projects/:id' component={ProjectDetails} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;

