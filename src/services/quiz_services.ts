import axios from "axios";
import { QuizType, QuestionTypes } from "../Types/quiz_types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
export const getQuizData = async (
  questions: number,
  level: string
): Promise<QuizType[]> => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=${questions}&difficulty=${level}&type=multiple`
  );
  const result: QuizType[] = data.results.map((qstObj: QuestionTypes) => {
    return {
      question: qstObj.question,
      answer: qstObj.correct_answer,
      correct_answer: qstObj.correct_answer,
      option: shuffleArray(
        qstObj.incorrect_answers.concat(qstObj.correct_answer)
      ),
    };
  });
  return result;
};
