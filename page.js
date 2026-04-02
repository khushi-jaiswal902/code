"use client"

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Mango", "Apple"]);
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>
      <button onClick={() => {
        /*const randomNumber = Math.random();
        if(randomNumber > 0.5) {
         throw new Error("Error occurred");
        }*/
       console.log(object);
      }}>Click Me</button>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
};

export default About;