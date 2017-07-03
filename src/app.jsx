'use strict';
import React from 'react';

import Nav from './components/top_nav.jsx';
import HeroSection from './components/hero.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
      <HeroSection />
      {/*<Nav />*/}
      </div>
    );
  }
});

module.exports = App;
