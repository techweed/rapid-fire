import React, { useState } from "react";
import { fetchQuizQuestions } from "./services/https";
import Card from "./components/card/Card";
import { GlobalStyle, Wrapper } from "./App.styles";
import Button from "./components/button/Button";

export type QuestionObject = {
  answer: string;
  question: string;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  //single element array for now
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  //Question Number
  const [number, setNumber] = useState(0);
  //Score so far
  const [score, setScore] = useState(0);
  //Stop game
  const [gameOver, setGameOver] = useState(true);
  //User answer input
  const [userAnswer, setUserAnswer] = useState("");

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].answer === answer;
      // Increment score
      if (correct) setScore((prev) => prev + 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>RAPID FIRE</h1>
        {gameOver ? (
          <Button
            content="Start"
            click={startTrivia}
            disabled={false}
            className="centerButton"
          />
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <Card
            questionNumber={number + 1}
            question={questions[0].question}
            userAnswer={userAnswer}
            submit={checkAnswer}
            onInputChange={(userAnswer) => setUserAnswer(userAnswer)}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
