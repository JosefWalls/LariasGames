import React from "react";
import {connect} from "react-redux";
import {getForum} from "./../../redux/reducers/Forum";


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
        return (
            <div>
                <h1>Forum</h1>
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