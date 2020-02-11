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
                <Link to="/Scenarios">
                    <section>
                        <h3>Our Projects</h3>
                    </section>
                </Link>
                <Link to="/Forum">
                    <section>
                        <h3>Forums</h3>
                    </section>
                </Link>
                <Link to="/Developer/Login">
                    <section>
                        <h3>Admin</h3>
                    </section>
                </Link>
                </div>
            </div>
        )
    }
}


export default NavBar;