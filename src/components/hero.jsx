import React, { Component } from 'react';

class HeroSection extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-caption">
                        <h1>We are the Ojai Cyclist...</h1>
                        <p>Camaraderie and friendship are a main goal while at the same time providing excellent exercise and less use of our cars.  </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;
