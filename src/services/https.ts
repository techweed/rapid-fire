import { QuestionObject } from "../App";

export const fetchQuizQuestions = async (): Promise<QuestionObject[]> => {
  const endpoint = `https://jservice.io/api/random`;
  const data = await (await fetch(endpoint)).json();
  return data.map((question: QuestionObject) => ({
    question: question.question,
    answer: question.answer,
  }));
};
