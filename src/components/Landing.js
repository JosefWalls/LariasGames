import React from "react";
import "./Landing.css";
import {connect} from "react-redux";
import {getAllScenarios} from "./../redux/reducers/Product"

class Landing extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllScenarios();
        console.log(this.props.scenarios)
    }

    render() {
        const mappedLatestScenario = this.props.scenarios.map((val, i) => {
            while(i >= this.props.scenarios.length - 1){
                return (
                    <div className="landingScenario" >
                            <img src={val.Header}></img>
                        <div className="landingScenarioInnerText">
                            <h1>{val.Title}</h1>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="landingCard">
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