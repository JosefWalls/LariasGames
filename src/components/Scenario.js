import React from "react";
import {connect} from "react-redux";
import {getScenario} from "./../redux/reducers/Product";
import "./Scenario.css";

class Scenario extends React.Component {
    constructor(){
        super()

        this.state = {
            imageIndex : 0
        }
    }


    componentDidMount = async () => {
        await this.props.getScenario(this.props.match.params.scenario_id)
        console.log(this.props.product[0].Images)
    }

    viewNextImage = () => {
            if(this.state.imageIndex === this.props.product[0].Images.length - 1){
                this.setState({imageIndex: 0})
            } else {
                this.setState({imageIndex: this.state.imageIndex += 1})
            }
    }

    viewPreviousImage = () => {
        if(this.state.imageIndex === 0){
            this.setState({imageIndex: this.props.product[0].Images.length - 1})
        } else {
            this.setState({imageIndex: this.state.imageIndex -= 1})
        }
    }

    render() {
        const mappedInfo = this.props.product.map((val, i) => {
            return (
                <div className="scenarioProductCard">
                    <header>
                        <h1>{val.Title}</h1>
                    </header>
                        <section className="mappedScenarioImages">
                        <img src={this.props.product[0].Images[this.state.imageIndex]}></img>
                        </section>
                        <main>
                            <button onClick={this.viewPreviousImage}>Prev</button>
                            <button onClick={this.viewNextImage}>Next</button>
                        </main>
                    <h6 id="publisher">Published By: {val.Publisher}</h6>
                    <p id="price">${val.Price}</p>
                    <p id="productId">Product ID: {val._id}</p>
                    <section>
                        <article>
                            <header>
                                <h3>Description:</h3>
                            </header>
                            <p>{val.Description}</p>
                        </article>
                        <article>
                            <header>
                                <h3>Included Scenarios</h3>
                            </header>
                            <section id="mappedFeaturesCard">
                            {
                            val.Features.map((val, i) => {
                                return (
                                    <div className="mappedFeatures">
                                        <p>{val}</p>
                                    </div>
                                )
                            })
                            }
                            </section>
                        </article>
                    </section>
                    <footer>
                        <a href={val.Link} target="_blank">
                            <button>Purchase Scenario Pack</button>
                        </a>
                    </footer>
                </div>
            )
        })
        return (
            <div className="scenarioCard">
                <section>
                    {mappedInfo}
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