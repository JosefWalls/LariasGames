import React from "react";
import {connect} from "react-redux";
import {updateState, addProduct} from "../../../redux/reducers/SiteManagement";
import {storage} from "../../../firebase-config";
import "./Products.css";

class Products extends React.Component {
    constructor(){
        super()

        this.state = {
            FeatureInput: ""
        }
    }
    handleInput = (e) => {
        if(e.target.name === "Features"){
            this.props.updateState({Features: this.props.Features.concat(e.target.value)})
        }   else {
            this.props.updateState({[e.target.name]: e.target.value})
        }
    }

    uploadHeader = (e) => {
        if(e.target.files[0]){
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`/Products/${image.name}`).put(image)
            uploadTask.on("state_changed", 
            () => {
                storage.ref('Products').child(image.name).getDownloadURL()
                .then(url => {
                    this.props.updateState({Header: url})
                })
            }
            )
        }
    }

    uploadImages = (e) => {
        e.preventDefault();
        console.log(this.props.Images)
        if(e.target.files[0]){
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`/Products/${image.name}`).put(image)
            uploadTask.on("state_changed", () => {
                storage.ref('Products').child(image.name).getDownloadURL()
                .then(url => {
                    console.log("url", url)
                    if(!this.props.Images.includes(url)){
                        this.props.updateState({Images: this.props.Images.concat(url)})
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            })
        }
    }

    addFeatures = (e) => {
        e.preventDefault();
        this.setState({FeatureInput: e.target.value})
    }

    pullFeatureArray = () => {
            this.props.updateState({Features: this.props.Features.concat(this.state.FeatureInput)})
    }

    uploadScenarioPack = async(e) => {
        const {Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country} = this.props;
        alert(this.props.Features)
            await this.props.addProduct(Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country)
            .then(() => {
                alert("Added")
            })
            .catch(err => {
                console.log(err)
                alert("Error")
            })
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <select onChange={this.handleInput} name="Category">
                        <option>---</option>
                        <option value="Scenario">Scenario</option>
                        <option value="Route">Route</option>
                    </select>
                {this.props.Category === "Scenario" ? <section>
                    <h2>Add A Product:</h2>
                    <input placeholder="Title" onChange={this.handleInput} name="Title"></input>
                    <h6>Header Image:</h6>
                    <input placeholder="Header" onChange={this.uploadHeader} type="file"></input>
                    <h6>Upload Images:</h6>
                    <input placeholder="Images" name="Images" onChange={this.uploadImages} type="file"></input>
                    <textarea placeholder="Description" onChange={this.handleInput} name="Description" id="descriptionBox"></textarea>
                     <input placeholder="Features" name="Features"  onChange={this.addFeatures} ></input>
                     <button onClick={this.pullFeatureArray}></button>
                    <input placeholder="Publisher" onChange={this.handleInput} name="Publisher"></input>
                    <input placeholder="Price" onChange={this.handleInput} name="Price"></input>
                    <input placeholder="Link" onChange={this.handleInput} name="Link"></input>
                    <select onChange={this.handleInput} name="Country">
                        <option>---</option>
                        <option value="United States">United States</option>
                        <option value="Great Britian">Great Britian</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <button onClick={this.uploadScenarioPack}>Add Scenario Packv</button>
                </section>: this.props.Category === "Route" ? <h1>Route</h1>: null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        Title: reduxState.SiteManagementReducer.Title,
        Category: reduxState.SiteManagementReducer.Category,
        Description: reduxState.SiteManagementReducer.Description,
        Header: reduxState.SiteManagementReducer.Header,
        Images: reduxState.SiteManagementReducer.Images,
        Features: reduxState.SiteManagementReducer.Features,
        Publisher: reduxState.SiteManagementReducer.Publisher,
        Price: reduxState.SiteManagementReducer.Price,
        Link: reduxState.SiteManagementReducer.Link,
        Country: reduxState.SiteManagementReducer.Country,
        scenarios: reduxState.ProductReducer.scenarios
    }
}

export default connect(mapStateToProps, {updateState, addProduct})(Products);