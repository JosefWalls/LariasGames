import React from "react";
import {Link} from "react-router-dom";


class Home extends React.Component {
    constructor(){
        super()
    }


    render() {
        return (
            <div>
                <h1>Developer Home</h1>
                <section>
                    <Link to="/SiteManagement/Products">
                        <button>Site Management</button>
                    </Link>
                </section>
            </div>
        )
    }
}


export default Home;