import React from "react";
import {connect} from "react-redux";
import {getForum} from "./../../redux/reducers/Forum";
import "./Forum.css";

class Forum extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        const forumId = this.props.match.params.forum_id;
        await this.props.getForum(forumId);
        console.log(this.props.Forum)
    }


    render() {
        const forumHeader = this.props.Forum.map((val, i) => {
            return (
                <div className="ForumTopper">
                    <header>
                        <h6>{val.Title}</h6>
                    </header>
                </div>
            )
        })
        return (
            <div className="ForumLandingMain">
                <div className="ForumLandingCard">
                    {forumHeader}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        Forum: reduxState.ForumReducer.Forum
    }
}


export default connect(mapStateToProps, {getForum})(Forum);