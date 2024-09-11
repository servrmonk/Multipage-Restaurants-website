import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
        
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Baba ka Dhaba, where we believe that great food brings people together. Located in the heart of Patna, our restaurant offers a cozy atmosphere, perfect for enjoying a meal with family and friends. We specialize in serving fresh, locally sourced ingredients, crafted into delicious dishes inspired by both traditional and modern cuisine. Whether you're here for a quick lunch, a relaxed dinner, or a special celebration, our team is dedicated to providing you with an unforgettable dining experience. At Baba ka Dhaba, it's not just about the food, but the memories you create with every bite. Come and taste the difference!
        </p>
      </div>
    </div>
  );
};

export default About;
