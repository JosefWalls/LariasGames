import React from "react";
import {connect} from "react-redux";
import {getAllAnnouncements} from "./../redux/reducers/SiteManagement";
import "./Announcements.css";

class Announcement extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.getAllAnnouncements();
        console.log(this.props.Announcements)
    }

    render() {
        const mappedLatestAnnouncement = this.props.Announcements.map((val, i) => {
            while(i === this.props.Announcements.length - 1){
                return (
                    <div className="Announcement">
                            <img src={val.Header}></img>
                            <section>
                                <header>
                                    <p>{val.Title}</p>
                                </header>
                                <div>
                                    <p>{val.Description}</p>
                                </div>
                            <footer>
                                <a href={val.Link} target="_blank">
                                    <button>View More Information</button>
                                </a>
                            </footer>
                            </section>
                    </div>
                )
            }
        })
        return (
            <div className="AnnouncementMain">
                <div className="AnnouncementCard">
                    {mappedLatestAnnouncement}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        Announcements: reduxState.SiteManagementReducer.Announcements
    }
}

export default connect(mapStateToProps, {getAllAnnouncements})(Announcement);