import ImageSlider from "../ImageSlider";
import '../../Styles/ImageSlider.css';

const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
//const containerStyles = {
    //width: "700px",
    //height: "300px",
   //margin: "30px auto",
  //};
  return (
    <div>
      
      <div className="container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;