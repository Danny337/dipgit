import React from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Slider from './components/Slider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Price from './pages/Price';
import Contacts from './pages/Contacts';

const App = () => {

  return (
    <>

      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/price' component={Price} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>

      <Info />
      <Slider />
      <About />
      <Footer />
    </>
  );
}

export default App;
