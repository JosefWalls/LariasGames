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
        const mappedLatestScenario = this.props.scenarios.map((val, i) => {
            while(i >= this.props.scenarios.length - 1){
                return (
                    <div className="landingScenario" >
                    <Link to={`/Scenario/${val._id}`}>
                            <img src={val.Header}></img>
                    </Link>
                        <div className="landingScenarioInnerText">
                            <h1>{val.Title}</h1>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="landingCard">
                <header>
                    <h1 id="latestPack">Our Latest Pack!</h1>
                </header>
                {mappedLatestScenario}
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