import React from "react";
import {connect} from "react-redux";
import {getAllScenarios, updateState} from "./../redux/reducers/Product";
import "./Scenarios.css";
import {Link} from "react-router-dom";
import {Card, Button} from "react-bootstrap";

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
                    <Card>
                        <Card.Img variant="top" src={val.Header}></Card.Img>
                        <Card.Title>{val.Title}</Card.Title>
                    </Card>
                    </Link>
                </div>
            )
        })
        return (
            <div>
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