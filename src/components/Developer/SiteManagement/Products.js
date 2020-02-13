import React from "react";
import {connect} from "react-redux";
import {updateState, addProduct, addAnnouncement} from "../../../redux/reducers/SiteManagement";
import {storage} from "../../../firebase-config";
import "./Products.css";
import Nav from "./../../Navbar";

class Products extends React.Component {
    constructor(){
        super()

        this.state = {
            FeatureInput: "",
            TempImage: ""
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
        if(e.target.files[0]){
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`/Products/${image.name}`).put(image)
            uploadTask.on("state_changed", () => {
                storage.ref('Products').child(image.name).getDownloadURL()
                .then(url => {
                    this.setState({TempImage: url})
                })
                .catch(err => {
                    console.log(err)
                })
            })
        }
    }

    uploadAnnouncementImage = (e) => {
        e.preventDefault();
        if(e.target.files[0]){
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`/Announcements/${image.name}`).put(image)
            uploadTask.on("state_changed", () => {
                storage.ref('Announcements').child(image.name).getDownloadURL()
                .then(url => {
                    console.log("url", url)
                    if(!this.props.Images.includes(url)){
                        this.props.updateState({Header: url})
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
    addImage = () => {
        console.log(this.state.TempImage)
        this.props.updateState({Images: this.props.Images.concat(this.state.TempImage)})
    }

    pullFeatureArray = () => {
            this.props.updateState({Features: this.props.Features.concat(this.state.FeatureInput)})
    }

    uploadScenarioPack = async(e) => {
        const {Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country} = this.props;
        // alert(this.props.Features)
        console.log(Images)
            await this.props.addProduct(Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country)
            .then(() => {
                alert("Added")
            })
            .catch(err => {
                console.log(err)
                alert("Error")
        })
    }

    uploadAnnouncement = () => {
        const {Title, Header, Description, Link} = this.props;
        this.props.addAnnouncement(Title, Header, Description, Link)
        .then(() => {
            this.props.history.push("/Developer/Home")
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="ProductsHome">
                <div className="">
                    <select onChange={this.handleInput} name="Category">
                        <option>---</option>
                        <option value="Scenario">Scenario</option>0
                        <option value="Route">Route</option>
                        <option value="Announcement">Announcement</option>
                    </select>
                {this.props.Category === "Scenario" ? <section>
                    <input placeholder="Title" onChange={this.handleInput} name="Title"></input>
                    <h6>Header Image:</h6>
                    <input placeholder="Header" onChange={this.uploadHeader} type="file"></input>
                    <h6>Upload Images:</h6>
                    <input placeholder="Images" name="Images" onChange={this.uploadImages} type="file"></input>
                    <button onClick={this.addImage}>Add Image</button>
                    <textarea placeholder="Description" onChange={this.handleInput} name="Description" id="descriptionBox"></textarea>
                     <input placeholder="Features" name="Features"  onChange={this.addFeatures} ></input>
                    <div className="buttonContainer">
                        <button onClick={this.pullFeatureArray}>Add Feature</button>
                    </div>
                    <input placeholder="Publisher" onChange={this.handleInput} name="Publisher"></input>
                    <input placeholder="Price" onChange={this.handleInput} name="Price"></input>
                    <input placeholder="Link" onChange={this.handleInput} name="Link"></input>
                    <select onChange={this.handleInput} name="Country">
                        <option>---</option>
                        <option value="United States">United States</option>
                        <option value="Great Britian">Great Britian</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <div className="buttonContainer">
                        <button onClick={this.uploadScenarioPack}>Add Scenario Pack</button>
                    </div>
                </section>: this.props.Category === "Announcement" ? 
                <div className="AddAnnouncementCard">
                <input placeholder="Title" onChange={this.handleInput} name="Title"></input>
                <h6>Header Image:</h6>
                <input placeholder="Header" onChange={this.uploadAnnouncementImage} type="file"></input>
                <textarea placeholder="Description" onChange={this.handleInput} name="Description" id="descriptionBox"></textarea>
                <input placeholder="Link" onChange={this.handleInput} name="Link"></input>
                <div className="buttonContainer">
                    <button onClick={this.uploadAnnouncement}>Add Announcement</button>
                </div>
                </div>
                : null}
                </div>
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

export default connect(mapStateToProps, {updateState, addProduct, addAnnouncement})(Products);