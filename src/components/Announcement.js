import React from "react";
import {connect} from "react-redux";
import {getAllAnnouncements} from "./../redux/reducers/SiteManagement";
import "./Announcements.css";

class Announcement extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="AnnouncementCard">
                <h1>Announcement</h1>
            </div>
        )
    }
}


export default Announcement;