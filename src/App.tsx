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
  const score = useRef(0);
  const [loading, setLoading] = useState(false);
  //single element array for now
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  //Stop game
  const [gameOver, setGameOver] = useState(true);
  //User answer input
  const [userAnswer, setUserAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  //initialize states and fetching question
  const startTrivia = async () => {
    questionNumber.current += 1;
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setLoading(false);
    setUserAnswer("");
    setAnswerStatus("");
  };

  // Function on submit handles correct and incorrect answers
  const checkAnswer = () => {
    if (
      questions[0].answer.toLowerCase().replace(/[^A-Za-z0-9]/g, "") ===
      userAnswer.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
    ) {
      score.current += 1;
      setAnswerStatus("Correct");
      setTimeout(function () {
        setAnswerStatus("");
        startTrivia();
      }, 2000);
    } else {
      setAnswerStatus("Incorrect");
      setTimeout(function () {
        setAnswerStatus("");
      }, 4000);
    }
  };
  // skip without answering
  const skipAnswer = () => {
    startTrivia();
  };
  //go back to home
  const stopQuiz = () => {
    setGameOver(true);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>RAPID FIRE {!gameOver && questionNumber.current}</h1>
        {gameOver ? (
          <Button
            content="Start"
            name="start"
            icon={null}
            click={startTrivia}
            disabled={false}
            className="centerButton"
          />
        ) : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <Card
            score={score.current}
            question={questions[0].question}
            userAnswer={userAnswer}
            submit={checkAnswer}
            skip={skipAnswer}
            stop={stopQuiz}
            answerStatus={answerStatus}
            onInputChange={(userAnswer) => setUserAnswer(userAnswer)}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
