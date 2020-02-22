import React from "react";
import {connect} from "react-redux";
import {getAllScenarios, updateState} from "../redux/reducers/Product";
import "./Scenarios.css";
import {Link} from "react-router-dom";
import Nav from "./Navbar";

class Scenarios extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllScenarios();
        console.log(this.props.scenarios)
    }


    render() {
        const mappedProducts = this.props.scenarios.map((val, i) => {
            return (
                <div className="individualProduct">
                    <Link to={`/Scenario/${val._id}`}>
                    <div>
                        <img src={val.Header}></img>
                        <h5>{val.Title}</h5>
                    </div>
                    </Link>
                </div>
            )
        })
        return (
            <div>
            <Nav />
                <div className="productPage">
                    <div className="scenarioPage">
                        <div className="productCard">
                            {mappedProducts}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToprops = reduxState => {
    return {
        scenarios: reduxState.ProductReducer.scenarios
    }
}

export default connect(mapStateToprops, {getAllScenarios, updateState})(Scenarios);