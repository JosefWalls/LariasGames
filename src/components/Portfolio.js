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
                    <div className="productCategories">
                        <div className="productCategory">
                            <Link to="/Scenarios">
                                <h5>Scenario Packs</h5>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Portfolio;