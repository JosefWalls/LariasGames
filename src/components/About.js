import React from "react";
import "./About.css";

class About extends React.Component {
    constructor(){
        super()


    }



    render() {
        return (
            <div className="aboutCard" id="About">
                <div className="aboutMain">
                    <header>
                        <h1>Who We Are</h1>
                    </header>
                    <p>We are proud to be apart of the Train Simulation community by contributing the best add-ons for users to enjoy.
                    Founded in 2015 by Josef Walls, the goal of <span> Larias Games </span> is to produces awesome add-ons and contribute to projects where help is needed!
                    We use programs such as 3DSMax and the in game tools to produce our add-ons. Josef Walls is a Developer during the day, producing Websites and Software
                    in the Dallas - Fort Worth Metroplex.
                    </p>
                </div>
                <div className="aboutPictures">
                    <section></section>
                </div>
                <header id="whatWeOffer">
                    <h3>What We Offer</h3>
                </header>
                <div className="aboutUsCategories">
                        <p>Scenarios / Activites</p>
                        <p>Asset Creation</p>
                        <p>Environments</p>
                </div>
            </div>
        )
    }
}


export default About;