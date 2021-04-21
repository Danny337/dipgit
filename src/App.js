import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Price from './pages/Price';
import Contacts from './pages/Contacts';
import Slider from './components/slider/Slider';
import Request from './pages/Request';
import Pc from './pages/Pc';
import Printer from './pages/Printer';

const App = () => {

  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/pc' component={Pc} />
          <Route path='/printer' component={Printer} />
          <Route path='/price' component={Price} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/request' component={Request} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
