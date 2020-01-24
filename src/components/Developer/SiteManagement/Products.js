import React from "react";
import {connect} from "react-redux";
import {updateState, addProduct} from "../../../redux/reducers/SiteManagement";
import {getAllProducts} from "../../../redux/reducers/Product";
import {storage} from "../../../firebase-config";
import "./Products.css";

class Products extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllProducts();
        console.log(this.props.products)
    }

    handleInput = (e) => {
        this.props.updateState({[e.target.name]: e.target.value})
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

    uploadProduct = async(e) => {
        const {Title, Category, Description, Header, Images, Features, Publisher, Price, Link} = this.props;
        console.log(Images)
            await this.props.addProduct(Title, Category, Description, Header, Images, Features, Publisher, Price, Link)
            .then(() => {
                alert("Added")
            })
            .catch(err => {
                console.log(err)
                alert("Error")
            })
    }

    render() {
        const mappedProducts = this.props.products.map((val, i) => {
            return (
                <div>
                    <h1>{val.Title}</h1>
                    <img src={val.Header}></img>
                </div>
            )
        })
        return (
            <div className="productMain">
                <div className="addProduct">
                <section>
                    <h2>Add A Product:</h2>
                    <select onChange={this.handleInput} name="Category">
                        <option>---</option>
                        <option value="Scenario">Scenario</option>
                        <option value="Route">Route</option>
                    </select>
                    <input placeholder="Title" onChange={this.handleInput} name="Title"></input>
                    <h6>Header Image:</h6>
                    <input placeholder="Header" onChange={this.uploadHeader} type="file"></input>
                    <h6>Upload Images:</h6>
                    <input placeholder="Images" name="Images" onChange={this.uploadImages} type="file"></input>
                    <textarea placeholder="Description" onChange={this.handleInput} name="Description" id="descriptionBox"></textarea>
                    <input placeholder="Features" onChange={this.handleInput} name="Features"></input>
                    <input placeholder="Publisher" onChange={this.handleInput} name="Publisher"></input>
                    <input placeholder="Price" onChange={this.handleInput} name="Price"></input>
                    <input placeholder="Link" onChange={this.handleInput} name="Link"></input>
                    <select onChange={this.handleInput} name="Country">
                        <option>---</option>
                        <option value="United States">United States</option>
                        <option value="Great Britian">Great Britian</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <button onClick={this.uploadProduct}>Preview</button>
                </section>
                </div>
                <h1>Products Currently on Site</h1>
                {mappedProducts}
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
        products: reduxState.ProductReducer.products
    }
}

export default connect(mapStateToProps, {updateState, addProduct, getAllProducts})(Products);