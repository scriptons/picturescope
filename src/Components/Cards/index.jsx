import React from "react";
import { Link } from "react-router-dom";
import JSON from "../../JSON/Pictures.json";
import "../../Styles/Card.css";

function Cards () {
    return (
        <div className="cards">
            {JSON.map ((element) => (
                <Link to = { `gallerypage/${element.id}`} //utilisation de <Link> pour le clic sur images 
                    key = {element.id} 
                    className="card"
                >
                    <img src = { element.url } alt = { element.title } />
                    <p> { element.title }</p>
                </Link>
            ))}
        </div> 
    )
}

export default Cards;