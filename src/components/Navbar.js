import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    constructor(){
        super()
    }



    render() {
        return (
            <div className="NavBar">
                <Link to="/">
                    <header id="LariasGames">
                        <h2>Larias Games</h2>
                    </header>
                </Link>
                <div className="sectionsOnNav">
                <Link to="/About">
                    <section>
                        <h3>Who We Are</h3>
                    </section>
                </Link>
                <Link to="/Products">
                    <section>
                        <h3>Add Ons</h3>
                    </section>
                </Link>
                </div>
            </div>
        )
    }
}


export default NavBar;