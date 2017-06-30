'use strict';
import React from 'react';

import HeroSection from './components/hero.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
      <HeroSection />
      </div>
    );
  }
});

module.exports = App;
