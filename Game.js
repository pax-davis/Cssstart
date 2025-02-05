import React, { useState, useEffect } from "react";
import "./Game.css";

const colors = ["green", "red", "yellow", "blue"];

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [score, setScore] = useState(0);
  const [isUserTurn, setIsUserTurn] = useState(false);

  useEffect(() => {
    if (!isUserTurn && sequence.length > 0) {
      playSequence();
    }
  }, [sequence]);

  const playSequence = () => {
    let i = 0;
    const interval = setInterval(() => {
      flashButton(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        setIsUserTurn(true);
      }
    }, 1000);
  };

  const flashButton = (color) => {
    const button = document.getElementById(color);
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 500);
  };

  const handleUserInput = (color) => {
    if (!isUserTurn) return;
    flashButton(color);
    setUserInput((prev) => [...prev, color]);

    if (sequence[userInput.length] !== color) {
      alert("Game Over! Your score: " + score);
      resetGame();
    } else if (userInput.length + 1 === sequence.length) {
      setScore(score + 1);
      setUserInput([]);
      setIsUserTurn(false);
      addNewStep();
    }
  };

  const addNewStep = () => {
    setSequence([...sequence, colors[Math.floor(Math.random() * 4)]]);
  };

  const resetGame = () => {
    setSequence([]);
    setUserInput([]);
    setScore(0);
    setIsUserTurn(false);
  };

  return (
    <div className="game">
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            id={color}
            className={`button-${color}`}
            onClick={() => handleUserInput(color)}
          ></button>
        ))}
        <div className="controls center">
          <div className="game-name">Simon</div>
          <div className="score">{score}</div>
          <button className="btn btn-primary" onClick={addNewStep}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;