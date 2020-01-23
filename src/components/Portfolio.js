import React from "react";
import "./Portfolio.css";
import {connect} from "react-redux";
import {getAllProducts} from "./../redux/reducers/Product";

class Portfolio extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllProducts();
        console.log(this.props.products)
    }


    render() {
        const recentProducts = this.props.products.map((val, i) => {
            return (
                <div className="recentProductcard">
                    <header>
                        <h1>{val.Title}</h1>
                    </header>
                    <img src=""></img>
                </div>
            )
        })
        return (
            <div className="portfolioCard">
                <header className="portfolioTitled">
                    <h2>Our Lastest Products!</h2>
                </header>
                <div className="recentProducts"> 
                    {recentProducts}
                </div>
                <header className="portfolioTitled">
                    <h2>View our:</h2>
                </header>
                    <div className="productCategories">
                        <div className="productCategory">
                            <h5>Scenario Packs</h5>
                        </div>
                        <div className="productCategory">
                            <h5>Routes</h5>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        products: reduxState.ProductReducer.products
    }
}

export default connect(mapStateToProps, {getAllProducts})(Portfolio);