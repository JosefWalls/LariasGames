import React from "react";
import {connect} from "react-redux";
import {getScenario} from "./../redux/reducers/Product";
import "./Scenario.css";
import {Card} from "react-bootstrap";

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
                <div>
                    <div className="ProductCard">
                    <section className="ProductImages">
                        <div id="MainImage">
                            <img src={this.props.product[0].Images[this.state.imageIndex]}></img>
                        </div>
                        <section className="buttonImages">
                            <button onClick={this.viewPreviousImage}>Previous</button>
                            <button onClick={this.viewNextImage}>Next</button>
                        </section>
                        <div className="smallerImages">
                        {
                            val.Images.map((val, i) => {
                                return (
                                    <div>
                                        {i === this.state.imageIndex ? <img src={val} id="CurrentImage"></img> : <img src={val}></img>}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </section>
                    <section className="ProdutDescription">
                            <header>
                                <h1>{val.Title}</h1>
                            </header>
                            <section id="publisher">
                                <h5>Published By {val.Publisher}</h5>
                            </section>
                            <main>
                                <p>{val.Description}</p>
                            </main>
                            <div className="ProductFeatures">
                                <header>
                                    <h4>Included In This Pack:</h4>
                                </header>
                                {val.Features.map((val, i) => {
                                    return (
                                        <div className="FeatureCard">
                                        <Card>
                                            <Card.Body>
                                                <p>{val}</p>
                                            </Card.Body>
                                        </Card>
                                        </div>
                                    )
                                })}
                            </div>
                    <footer className="ProductFooter">
                        <h2>${val.Price}</h2>
                    </footer>
                    </section>
                </div>
                <div className="buttonToPurchase">
                    <a href={val.Link} target="_blank"><button>Purchase This Pack here!</button></a>
                </div>
                </div>
            )
        })
        return (
            <div className="scenarioCard">
                <section>
                    <section className="mappedInfo">
                        {mappedInfo}
                    </section>
                </section>
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