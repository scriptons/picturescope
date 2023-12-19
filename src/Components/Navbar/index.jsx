import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/navigation.css"


function Navbar() {

    return (
        
        <div className="navbar">
            
            <div className="nav-links">
                <NavLink exact to
                    ="/" activeClassName="active"
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="/Square" activeClassName="active"
                >
                    Memories
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;