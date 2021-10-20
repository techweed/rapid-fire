import React, { useState, useRef } from "react";
import { fetchQuizQuestions } from "./services/https";
import Card from "./components/card/Card";
import { GlobalStyle, Wrapper } from "./App.styles";
import Button from "./components/button/Button";

export type QuestionObject = {
  answer: string;
  question: string;
};

const App: React.FC = () => {
  const questionNumber = useRef(0);
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

  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  const startTrivia = async () => {
    questionNumber.current += 1;
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setLoading(false);
    setUserAnswer("");
    setIncorrectAnswer(false);
  };

  const checkAnswer = (e: any) => {
    // Increment score
    if (questions[number].answer.toLowerCase() === userAnswer.toLowerCase()) {
      setScore((prev) => prev + 1);
      startTrivia();
    } else {
      setIncorrectAnswer(true);
    }
  };
  const skipAnswer = () => {
    startTrivia();
  };
  const stopQuiz = () => {
    setGameOver(true);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>RAPID FIRE</h1>
        {gameOver ? (
          <Button
            content="Start"
            name="start"
            click={startTrivia}
            disabled={false}
            className="centerButton"
          />
        ) : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <Card
            questionNumber={questionNumber.current}
            question={questions[0].question}
            userAnswer={userAnswer}
            submit={checkAnswer}
            skip={skipAnswer}
            stop={stopQuiz}
            incorrectAnswer={incorrectAnswer}
            onInputChange={(userAnswer) => setUserAnswer(userAnswer)}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
