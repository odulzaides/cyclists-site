import React from 'react';

const Weather = (props) => (
    <div id="weather" >
        <div className="container">
            <p>
                The following are the links to the hourly weather reports from the weather channel (for Ojai and Ventura.)  In general we will start from Ojai unless the hourly weather report in Ojai shows the "TEMP" or the "FEELS" going over 90º F between 9AM and noon.

            </p>
            <p>
                Click on the location in the table below to find the hourly weather forecast or the radar map.
            </p>
        </div>
        <div className="weather-widgets">

            <iframe id="forecast-embed" type="text/html" frameborder="0" height="245"
                width="100%"
                src="http://forecast.io/embed/#lat=34.4480&lon=-119.2429&name=Ojai, Ca&color=#00aaff&font=Raleway&units=us">
            </iframe>
            <iframe id="forecast-embed" type="text/html" frameborder="0" height="245"
                width="100%"
                src="http://forecast.io/embed/#lat=34.2746&lon=-119.2290&name=Ventura, Ca&color=#00aaff&font=Raleway&units=us">
            </iframe>

        </div>
        <a className="center" href="index.html">Back to Top</a>
    </div>
)
export default Weather;
/*
TODO: set up axios on App component
http://api.wunderground.com/api/6b4550de23b4cf62/forecast10day/q/State/City.json
*/