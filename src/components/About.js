import React from "react";
import "./About.css";
import {Jumbotron, Container, Card} from "react-bootstrap";

class About extends React.Component {
    constructor(){
        super()


    }
    render() {
        return (
            <div>
                <div className="aboutCard" id="About">
                <div className="aboutMain">
                    <Jumbotron>
                        <Container>
                    <p>We are proud to be apart of the Train Simulation community by contributing the best add-ons for users to enjoy.
                    Founded in 2019 by Josef Walls, the goal of <span> Larias Games </span> is to produce awesome add-ons and contribute to projects where help is needed!
                    We use programs such as 3DSMax and the in game tools to produce our add-ons. We are also looking to expand to new titles and genres in the coming future! We also offer third party services, such as Asset creation, Scenario creation and Route building!
                    </p>
                    <p>We are looking to add talented and awesome creators to our team, so take a look at our opportunities here!</p>
                        </Container>
                    </Jumbotron>
                </div>
                <section className="teamCard">
                    <main>
                     <div>
                        <Card>
                         <Card.Body>
                            <p id="JosefWallsImage"></p>
                            <Card.Title><h1>Josef Walls</h1></Card.Title>
                            <Card.Subtitle><h6>Founder / Lead Developer</h6></Card.Subtitle>
                            <Card.Text>His every day work is Web and Software development, and alongside that he loves Go Karting and Racing! Josef has been working with Trains and Drivers since 2015 to release several packs through Trainsim.store and Steam!</Card.Text>
                         </Card.Body>
                        </Card>
                     </div>
                     <div>
                        <Card>
                         <Card.Body>
                            <Card.Title><h1>Josef Walls</h1></Card.Title>
                            <Card.Subtitle><h6>Founder / Lead Developer</h6></Card.Subtitle>
                            <Card.Text>His every day work is Web and Software development, and alongside that he loves Go Karting and Racing!</Card.Text>
                         </Card.Body>
                        </Card>
                     </div>
                    </main>
                </section>
            </div>
            </div>
        )
    }
}


export default About;