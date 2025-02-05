import React, { useState, useEffect } from "react";
import { getScores } from "../api";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getScores().then(setScores);
  }, []);

  return (
    <div>
      <h2>High Scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score.username}: {score.points}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
