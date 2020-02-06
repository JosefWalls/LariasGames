import React from "react";
import "./Landing.css";
import {connect} from "react-redux";
import {getAllScenarios} from "./../redux/reducers/Product";
import {Link}from "react-scroll";

class Landing extends React.Component {
    constructor(){
        super()

    }

    componentDidMount = async () => {
        await this.props.getAllScenarios();
    }

    render() {
        return (
            <div className="landingCard">
                <div className="navBar">
                    <Link to="Main" smooth={true} duration={1000}>
                        <h2>Larias Games</h2>
                    </Link>
                    <Link to='About' smooth={true} duration={1000}>
                        <h6>About</h6>
                    </Link>
                    <Link to="Portfolio" smooth={true} duration={1000}>
                        <h6>Portfolio</h6>
                    </Link>
                    <Link to="Contact" smooth={true} duration={1000}>
                        <h6>Contact</h6>
                    </Link>
                    <h6>Admin</h6>
                </div>
                <main>
                    <div className="landingImage"></div>
                    <div className="landingTraits">
                        <p>Passion</p>
                        <p>Creativity</p>
                        <p>Highest Quality</p>
                    </div>
                </main>
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