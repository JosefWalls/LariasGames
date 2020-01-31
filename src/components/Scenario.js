import React from "react";
import {connect} from "react-redux";
import {getScenario} from "./../redux/reducers/Product";
import "./Scenario.css";

class Scenario extends React.Component {
    constructor(){
        super()
    }


    componentDidMount = async () => {
        await this.props.getScenario(this.props.match.params.scenario_id)
        console.log(this.props.product[0].Images)
    }

    render() {
        const mappedInfo = this.props.product.map((val, i) => {
            return (
                <div className="scenarioProductCard">
                    <header>
                        <h1>{val.Title}</h1>
                    </header>
                    <h6 id="publisher">Published By: {val.Publisher}</h6>
                    <p id="price">${val.Price}</p>
                    <p id="productId">Product ID: {val._id}</p>
                    <h3>Description:</h3>
                    <p>{val.Description}</p>
                </div>
            )
        })
        return (
            <div className="scenarioCard">
                {mappedInfo}
            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    return {
        product: reduxState.ProductReducer.product
    }
}

export default connect(mapStateToProps, {getScenario})(Scenario);