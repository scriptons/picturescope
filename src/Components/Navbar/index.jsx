import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/navigation.css"


function Navbar() {

    return (
        
        <div className="navbar">
            
            <div className="nav-links">
                <NavLink exact to
                    ="/GalleryPage" activeClassName="active"
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="/LoginPage" activeClassName="active"
                >
                    Login
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;