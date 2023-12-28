import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/LogoHeader.css"


function LogoHeader() {

    return (
        <div className="logo">
            <div className="center-logo">
            <NavLink exact to
                    ="/" activeClassName="active"
                >
                    <h1>PictureScope</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default LogoHeader;