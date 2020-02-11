import React from "react";
import "./Landing.css";
import {connect} from "react-redux";
import {getForums} from "./../../redux/reducers/Forum";
import {Link} from "react-router-dom";

class ForumLanding extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
       await  this.props.getForums();
       console.log(this.props.ActiveForums)
    }


    render() {
        const mappedThreads = this.props.ActiveForums.map((val, i) => {
            return (
                <Link to={`/Forum/${val._id}`}>
                    <div className="ForumThreadCard">
                        <header>
                            <h6>{val.Title}</h6>
                        </header>
                        <p>Posted By: {val.Poster}</p>
                    </div>
                </Link>
            )
        })
        return (
            <div className="ForumLandingMain">
                <div className="ForumLandingCard">
                    {mappedThreads}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        ActiveForums: reduxState.ForumReducer.ActiveForums
    }
}

export default connect(mapStateToProps, {getForums})(ForumLanding);