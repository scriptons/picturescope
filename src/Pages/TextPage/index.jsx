import React from "react";
import JSON from "../../JSON/Pictures.json";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards";
//import "../../Styles/GalleryPage.css"


function TextPage() {
    /*const idLogement = useParams();
    console.log(idLogement.id);
   const monLogement = JSON.find((element)=> element.id === idLogement.id);
    console.log(monLogement);*/
    return (
        <div className="App">
            <h1>Text from pictures</h1>
            <Cards />
        </div>
    )
}

export default TextPage() 