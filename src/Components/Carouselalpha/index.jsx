import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import JSONpicture from "../../JSON/Logement.json";
import arrowleft from "../../assets/arrowleft.png";
import arrowright from "../../assets/arrowright.png";
import "../../Styles/pictureslide.css";


function Pictureslide() {

    const idLogement = useParams();
    console.log(idLogement.id);
    const monLogement = JSONpicture.find((element)=> element.id === idLogement.id);
    //console.log(monLogement);
    const myPicture = monLogement.pictures;
    //console.log(myPicture.length); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = myPicture[currentIndex];
    //console.log(myPicture[currentIndex].length);
    //console.log(currentImage); 
     
    if (myPicture.length === 1) {
      return (
        <div className="picture-slide">
          <img className="picture" src={currentImage} alt={currentImage} /> 
        </div>
  ) 

      } else {

    const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(myPicture.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const nextImage = () => {
    if (currentIndex === myPicture.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
     }
     
  };
    return (
      <div className="picture-slide">
        
            <div className="arrows-left" onClick={prevImage}>
                <img className="left"
                src = {arrowleft}
                alt = "flèche gauche" 
                 />              
            </div><img className="picture" src={currentImage} alt={currentImage} /> 
            <div className="position">
        <p>{currentIndex + 1}/{myPicture.length}</p>
      </div>
            <div className="arrows-right" onClick={nextImage}>
                <img className="right"
                src = {arrowright}
                alt = "flèche droite" 
                 />
            </div>
            
            </div>
    );
  }
}
  export default Pictureslide;
