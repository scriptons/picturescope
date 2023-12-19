import React from "react";
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar';
import "../../Styles/Header.css"

function Header() {

    return (
        <>
        <div className="Header">
            <LogoHeader/>
            <Navbar />
        </div>
        </>
    )
}

export default Header;