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
                    <header id="mainTitle">
                        <h1>{val.Title}</h1>
                    </header>
                        <section className="mappedScenarioImages">
                        <img src={this.props.product[0].Images[this.state.imageIndex]} className="mainPhoto"></img>
                        <main>
                        {
                                val.Images.map((val, i) => {
                                    return (
                                        <div>
                                            {i === this.state.imageIndex ? <img src={val} id="currentImage"></img>
                                            :
                                            <img src={val}></img>
                                            }
                                        </div>
                                    )
                                })
                        }
                        </main>
                        </section>
                        <main className="imageSelection">
                            <button onClick={this.viewPreviousImage}>Prev</button>
                            <button onClick={this.viewNextImage}>Next</button>
                        </main>
                        <section className="productDetails">
                            <p id="productId">Product ID: {val._id}</p>
                            <p id="publisher">Published By {val.Publisher}</p>
                            <h6 id="price">${val.Price}</h6>
                        </section>
                    <section>
                        <article className="productDescription">
                            <header>
                                <h3>Description</h3>
                            </header>
                            <p>{val.Description}</p>
                        </article>
                        <article className="productFeatures">
                            <header>
                                <h3>Included in this Scenario Pack:</h3>
                            </header>
                            <ul className="mappedFeaturesCard">
                            {
                            val.Features.map((val, i) => {
                                return (
                                    <div className="mappedFeatures">
                                        <li>{val}</li>
                                    </div>
                                )
                            })
                            }
                            </ul>
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