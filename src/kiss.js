import React ,{useState,useEffect} from 'react';
import './App.css'; // Assuming you have some CSS for styling
import kiss1 from "./img/kiss1.jpg";
import kiss2 from "./img/kiss2.jpg";
import kiss3 from "./img/kiss3.jpg";

// Define an array of image URLs
const images = [
  kiss1,kiss2,kiss3
];

// Frame component to display an image
const Frame = ({ src }) => (
  <div className="frame">
    {src !== '' && <img src={src} alt="Image" />}
  </div>
);

// App component to render frames with images
const Kiss=()=> {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex < images.length ? nextIndex : 0;
        });
      }, 600); // Change the interval time as needed (in milliseconds)
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="container">
        <div className="frames">
          {images.map((src, index) => (
            <Frame key={index} src={index === currentImageIndex ? src : ''} />
          ))}
        </div>
        <h1 className='complete'>Yay &lt;3 See You</h1>
      </div>
    );
}

export default Kiss;
