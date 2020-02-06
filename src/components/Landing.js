import React from "react";
import "./Landing.css";
import {connect} from "react-redux";
import {getAllScenarios} from "./../redux/reducers/Product";
import {Link} from "react-router-dom";

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
                <img id="imageOne"></img>
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