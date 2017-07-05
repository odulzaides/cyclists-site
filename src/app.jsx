'use strict';
import React from 'react';

import Nav from './components/top_nav.jsx';
import HeroSection from './components/hero.jsx';
import About from './components/about.jsx';
import Rules from './components/rules.jsx';
import Weather from './components/weather.jsx';
import Rides from './components/rides.jsx';


let App = React.createClass({
  render : function(){
    return (
      <div>
      <HeroSection />
      <div>
      <About />
      <Rules />
      <Weather />
      <Rides />
      </div>
      </div>
    );
  }
});

module.exports = App;
