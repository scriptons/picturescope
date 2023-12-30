import React from "react";
import Cards from '../../Components/Cards';
import { NavLink } from "react-router-dom";
//import "../../Styles/GalleryPage.css"


function GalleryPage() {

    return (
        <div className="App">
            <NavLink exact to
                    ="/TextPage" activeClassName="active"
                >
                    <Cards/>
                </NavLink>
            
        </div>
    )
}

export default GalleryPage() 