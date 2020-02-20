import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="FooterSection">
                    <ul>
                        <li>Created by Larias Games</li>
                        <li></li>
                        <li>North Richland Hills, Texas</li>
                    </ul>
            </div>
        )
    }
}

export default Footer;