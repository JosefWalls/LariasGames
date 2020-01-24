import React from "react";
import {connect} from "react-redux";
import {updateState, loginDeveloper} from "../../redux/reducers/Developer";
import "./Login.css";
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(){
        super()
    }

    handleChange = (e) => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    loginDeveloper = (e) => {
        e.preventDefault();
        const {Username, Password} = this.props;
        this.props.loginDeveloper(Username, Password)
        .then(() => {
            this.props.history.push("/Developer/Home")
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="loginMain">
                <Link to="/">
                <div className="logoSection"/>
                </Link>
                <div className="loginCard">
                    <input placeholder="Username" name="Username" onChange={this.handleChange}></input>
                    <input placeholder="Password" name="Password" onChange={this.handleChange}></input>
                    <button onClick={this.loginDeveloper}>Log in</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps =  reduxState => {
    return {
        Username: reduxState.DeveloperReducer.Username,
        Password: reduxState.DeveloperReducer.Password,
        Developer: reduxState.DeveloperReducer.Developer
    }
}

export default connect(mapStateToProps, {updateState, loginDeveloper})(Login);