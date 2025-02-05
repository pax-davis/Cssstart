import React, { useState, useEffect } from "react";
import { getQuote } from "../api";

const About = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote().then((data) => setQuote(data.content));
  }, []);

  return (
    <div>
      <h2>About Simon</h2>
      <p>{quote}</p>
    </div>
  );
};

export default About;
