import React from "react";
import {connect} from "react-redux";
import {getScenario} from "./../redux/reducers/Product";
import "./Scenario.css";
import {Carousel, Card, Jumbotron, Container} from "react-bootstrap";
import Nav from "./Navbar";

class Scenario extends React.Component {
    constructor(){
        super()

        this.state = {
            imageIndex : 0
        }
    }


    componentDidMount = async () => {
        await this.props.getScenario(this.props.match.params.scenario_id)
        console.log(this.props.product)
    }

    viewNextImage = () => {
        if(this.state.imageIndex === (this.props.product[0].Images.length - 1) ){
            this.setState({imageIndex: 0})
        } else {
            this.setState({imageIndex: this.state.imageIndex += 1})
        }
    }

    viewPreviousImage = () => {
        if(this.state.imageIndex === 0){
            this.setState({imageIndex: (this.props.product[0].Images.length - 1)})
        } else {
            this.setState({imageIndex: this.state.imageIndex -= 1})
        }
    }

    render() {
        const mappedInfo = this.props.product.map((val, i) => {
            return (
                <div className="ProductCard">
                    <header>
                        <h5>{val.Title}</h5>
                    </header>
                    <section className="ProductImages">
                        <div className="carouselCard">
                            <Carousel>
                            {val.Images.map((val, i) => {
                                return (
                                <Carousel.Item>
                                    <img src={val}></img>
                                </Carousel.Item>
                                )
                            })}
                        </Carousel>
                        </div>
                    </section>
                    <div className="ProductMainInfo">
                    <div className="ProductDescription">
                        <section>
                            <header>
                                <h6>Overview</h6>
                            </header>
                            <p>{val.Description}</p>
                        </section>
                    </div>
                    <div className="ProductFeatures">
                        <header>
                            <h6>Included in this Pack:</h6>
                        </header>
                        <div>
                        <section>
                            {val.Features.map((val, i) => {
                                return (
                                    <div className="ProductFeature">
                                        <p>{val}</p>
                                    </div>
                                )
                            })}
                        </section>
                        </div>
                    </div>
                    </div>
                        <footer>
                            <a href={val.Link} target="_blank"><button>View Product</button></a>
                        </footer>
                </div>
            )
        })
        return (
            <div>
                <Nav />
                <div className="scenarioCard">
                <section>
                    <section className="mappedInfo">
                        {mappedInfo}
                    </section>
                </section>
                </div>
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