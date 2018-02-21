import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./PrivateProfile.css";
import API from "../../../utils/API";
import Placeholder from "../Placeholder";
import Requirements from "./Requirements";
import Results from "./Results";

const userID = "5a8624f2fe9f971c5c565bb3";

class PrivateProfile extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.loadUserData(userID);
    };
    loadUserData = (id) => {
        API.getUserData(id)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <HashRouter>
                <div className="card">
                    <div className="card-content">
                        <img id="profileimage" src="../assets/profile/ChickenKiller/profile.png" alt="My profile"></img>
                        <p id="name">{this.state.result.screenName}</p>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab">
                            <NavLink to="/preferences">date(preferences)</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to="/requirements">date(requirements)</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to="/results">date(results)</NavLink>
                            </li>
                            <li className="tab">
                            <NavLink to="/potentials">date(potentials)</NavLink>
                            </li>
                            <li className="tab">
                            <NavLink to="/contacts">date(contacts)</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="private-content">
                        <Route path="/" component={Placeholder} />
                        <Route path="/preferences" component={Placeholder} />
                        <Route path="/requirements" component={Requirements} />
                        <Route path="/results" component={Results} />
                        <Route path="/potentials" component={Placeholder} />
                        <Route path="/contacts" component={Placeholder} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default PrivateProfile;