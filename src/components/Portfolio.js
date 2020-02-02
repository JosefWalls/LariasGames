import React from "react";
import "./Portfolio.css";
import {Link} from "react-router-dom";

class Portfolio extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="portfolioCard">
                <header className="portfolioTitled">
                    <h2>View our:</h2>
                </header>
                    <div className="productCategories">
                        <div className="productCategory">
                            <Link to="/Scenarios">
                                <h5>Scenario Packs</h5>
                            </Link>
                        </div>
                        <div className="productCategory">
                            <h5>Routes</h5>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Portfolio;