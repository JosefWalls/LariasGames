import React from "react";
import "./Landing.css";
import {connect} from "react-redux";
import {getAllScenarios} from "./../redux/reducers/Product";
import {Carousel, Card} from "react-bootstrap";
import Announcement from "./Announcement";
import ForumLanding from "./Forum/Landing";
import Nav from "./Navbar";

class Landing extends React.Component {
    constructor(){
        super()

    }

    componentDidMount = async () => {
        await this.props.getAllScenarios();
    }

    render() {
        return (
                <div>
                <Nav />
                    <div className="landingCard">
                <section>
                    <div className="carouselCard">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://bit.ly/2UB6nOm"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://bit.ly/2OCmwiO"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://bit.ly/39iz6LP"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://bit.ly/2vJYXOs"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://bit.ly/39G3gZG"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </section>
                </div> 
                <Announcement />
                </div>
        )
    }
}

const mapStateToprops = reduxState => {
    return {
        scenarios: reduxState.ProductReducer.scenarios
    }
}

export default connect(mapStateToprops, {getAllScenarios})(Landing);