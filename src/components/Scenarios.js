import React from "react";
import {connect} from "react-redux";
import {getAllScenarios, updateState} from "./../redux/reducers/Product";
import "./Scenarios.css";
import {Link} from "react-router-dom";

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
                    <header>
                        <h1>{val.Title}</h1>
                    </header>
                    <img src={val.Header}></img>
                    <section>
                        <h6>${val.Price}</h6>
                        <Link to={`/Scenario/${val._id}`}>
                            <button>View Scenario Pack</button>
                        </Link>
                    </section>
                </div>
            )
        })
        return (
            <div className="productPage">
                <div className="scenarioPage">
                <div className="productCard">
                    {mappedProducts}
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