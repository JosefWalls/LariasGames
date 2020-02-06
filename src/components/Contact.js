import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor(){
        super()
    }



    render() {
        return (
            <div className="contactCard" id="Contact">
                <input placeholder="Email"></input>
                <input placeholder="Subject"></input>
                <input placeholder="Message"></input>
                <button>Submit Message</button>
            </div>
        )
    }
}


export default Contact;