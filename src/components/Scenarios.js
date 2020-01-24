import React from "react";
import {connect} from "react-redux";
import {getAllScenarios} from "./../redux/reducers/Product";


class Scenarios extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllScenarios();
        console.log(this.props.products)
    }

    render() {
        const mappedProducts = this.props.products.map((val, i) => {
            return (
                <div>
                    <h1>{val.Title}</h1>
                    <h6>{val.price}</h6>
                </div>
            )
        })
        return (
            <div>
                {mappedProducts}
            </div>
        )
    }
}

const mapStateToprops = reduxState => {
    return {
        products: reduxState.ProductReducer.products
    }
}

export default connect(mapStateToprops, {getAllScenarios})(Scenarios);