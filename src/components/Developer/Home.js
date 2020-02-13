import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import {connect} from "react-redux";
import {Card, Button} from "react-bootstrap";
import {getAllScenarios} from "./../../redux/reducers/Product";
import {deleteProduct} from "./../../redux/reducers/SiteManagement";
import Nav from "./../Navbar";

class Home extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = () => {
        this.props.getAllScenarios();
    }

    render() {
        const mappedProducts = this.props.scenarios.map((val, i) => {
            return (
                <div className="individualProduct">
                    <Card>
                        <Card.Img variant="top" src={val.Header}></Card.Img>
                        <Card.Title>{val.Title}</Card.Title>
                        <Link to={`/Developer/EditProduct/${val._id}`}>
                            <button id="deleteProduct">Edit Product</button>
                        </Link>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <Nav />
            <div className="developerHome">
                <section>
                    <Link to="/SiteManagement/Products">
                        <button>Site Management</button>
                    </Link>
                </section>
            </div>
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

const mapStateToProps = reduxState => {
    return {
        scenarios: reduxState.ProductReducer.scenarios
    }
}

export default connect(mapStateToProps, {getAllScenarios, deleteProduct})(Home);