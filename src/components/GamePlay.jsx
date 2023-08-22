// import React from 'react'
import styled from 'styled-components';
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from '../Styled/Button';
import Rules from './Rules';
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if(!selectedNumber) {
      setError("You have not Selected any number");
      return;
    }
    
    if(selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  }

  const resetScore = () => {
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score = {score}></TotalScore>
        <NumberSelector error = {error} setError = {setError} selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}> {showRules ? "Hide" : "Show"} Rules </Button>
      </div>
     { showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;



const MainContainer = styled.main`
padding-top: 50px;

    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;

    }
    .btns{
      margin-top: 40px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;


    }
`;