import React from "react";
import "./About.css";

class About extends React.Component {
    constructor(){
        super()


    }



    render() {
        return (
            <div className="aboutCard" id="About">
                <div className="AboutInner">
                    <h1>About</h1>
                    <div className="aboutInfo">
                        <p>Welcome to Larias Games! We produce high quality add ons for Dovetail Games' Train Simulator 2020, with our scenario packs, and upcoming routes being published through several partners! Scroll down to our Portfolio to check out some of our previous projects!</p>
                    </div>
                </div>
                <div className="AboutInner">
                    <h1>Our Partners</h1>
                    <div className="aboutInfo">
                        <h5>We have worked with numerous partners in our time of developing add-ons! Our partners include:</h5>
                        <ul>
                            <li>Trains and Drivers</li>
                            <li>Dovetail Games</li>
                            <li>Skyhook Games</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;