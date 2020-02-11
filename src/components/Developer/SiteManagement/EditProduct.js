import React from "react";
import "./EditProduct.css";
import {connect} from "react-redux";
import {getScenario, updateState} from "./../../../redux/reducers/Product";
import {editProduct} from "./../../../redux/reducers/SiteManagement";
import {storage} from "./../../../firebase-config";

class EditProductPage extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getScenario(this.props.match.params.scenario_id);
        const {Title, Description, Publisher, Price, Link, Header, Images} = this.props.product[0];
        this.props.updateState({Title: Title});
        this.props.updateState({Description: Description});
        this.props.updateState({Publisher: Publisher});
        this.props.updateState({Price: Price});
        this.props.updateState({Link: Link});
        this.props.updateState({Header: Header});
        this.props.updateState({Images: Images});
        console.log("Title" + this.props.product[0].Title)
        console.log("Description" + this.props.product[0].Description)
        console.log("Publisher" + this.props.product[0].Publisher)
        console.log("Price" + this.props.product[0].Price)
        console.log("Link" + this.props.product[0].Link)
        console.log("Header" + this.props.product[0].Header)
    }

    handleInput = (e) => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    changeHeader = (e) => {
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

    submitChanges = (e) => {
        e.preventDefault();
        const {Title, Description, Publisher, Price, Link, Header} = this.props;
        this.props.editProduct(this.props.match.params.scenario_id, Title, Description, Publisher, Price, Link, Header)
        .then(() => {
            console.log("success")
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="EditProductCard">
                <section>
                <div className="EditProductInput">
                    <input placeholder="Title" name="Title" onChange={this.handleInput}></input>
                    <textarea placeholder="Description" name="Description" onChange={this.handleInput}></textarea>
                    <input placeholder="Publisher" name="Publisher" onChange={this.handleInput}></input>
                    <input placeholder="Price" name="Price" onChange={this.handleInput}></input>
                    <input placeholder="Link" name="Link" onChange={this.handleInput}></input>
                </div>
                </section>
                <section className="HeaderSection">
                    <header>
                        <h5>Edit Header Image</h5>
                    </header>
                    <input type="file" onChange={this.changeHeader}></input>
                </section>
                <button onClick={this.submitChanges}>Submit Changes</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        product: reduxState.ProductReducer.product,
        Title: reduxState.SiteManagementReducer.Title,
        Category: reduxState.SiteManagementReducer.Category,
        Description: reduxState.SiteManagementReducer.Description,
        Header: reduxState.SiteManagementReducer.Header,
        Images: reduxState.SiteManagementReducer.Images,
        Features: reduxState.SiteManagementReducer.Features,
        Publisher: reduxState.SiteManagementReducer.Publisher,
        Price: reduxState.SiteManagementReducer.Price,
        Link: reduxState.SiteManagementReducer.Link,
        Country: reduxState.SiteManagementReducer.Country
    }
}

export default connect(mapStateToProps, {getScenario, updateState, editProduct})(EditProductPage);