import React from "react";
import {connect} from "react-redux";
import {getAllScenarios, updateState, filterScenariosCountry} from "./../redux/reducers/Product";
import "./Scenarios.css";

class Scenarios extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        if(this.props.products.length === 0){
            await this.props.getAllScenarios();
        }
        console.log(this.props.products)
    }


    selectCountry = async (e) => {
        await this.props.filterScenariosCountry(e.target.value);
        window.location.reload();
    }

    render() {
        const mappedProducts = this.props.products.map((val, i) => {
            return (
                <div className="individualProduct">
                    <header>
                        <h1>{val.Title}</h1>
                    </header>
                    <img src={val.Header}></img>
                    <h6>{val.price}</h6>
                </div>
            )
        })
        return (
            <div className="productMain">
                <select onChange={this.selectCountry}>
                    <option>---</option>
                    <option value="United States">United States</option>
                    <option value="Great Britian">Great Britian</option>
                    <option value="Germany">Germany</option>
                </select>
                <div className="productCard">
                    {mappedProducts}
                </div>
            </div>
        )
    }
}

const mapStateToprops = reduxState => {
    return {
        products: reduxState.ProductReducer.products
    }
}

export default connect(mapStateToprops, {getAllScenarios, updateState, filterScenariosCountry})(Scenarios);