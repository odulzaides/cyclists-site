import React from 'react';

const Nav = function (){
    return (
        <nav>
            <ul className="nav-pages">
                <li><a href="#about">About Us</a></li>
                <li><a href="#rules">Rules</a></li>
                <li><a href="#weather">Weather</a></li>
                <li><a href="#rides">Our Rides</a> </li>
                <li><a href="#photos">Photo Gallery</a></li>
                <li><a href="#misc">Misc</a></li>
            </ul>
        </nav>
    )
}
export default Nav;
