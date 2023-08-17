import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { useHistory } from "react-router";
function Home() {

  const images = [
    "https://images.unsplash.com/photo-1525441273400-056e9c7517b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1513623935135-c896b59073c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ];
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next image
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // change every 5s

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="home-page">
      <div className="carousel">
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className={
                index === currentImageIndex ? "active" : "inactive"
              }
            />
            <div className="text-overlay">
              <h1>Focus on the flowers. We'll save the dates.</h1>
              <button onClick={() => history.push("/venues")}>Find a Venue For Your Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Home;