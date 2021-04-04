import React from "react";

export type QuestionTypes = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizType = {
  question: string;
  answer: string;
  correct_answer: string;
  option: string[];
};

export type QuestionPropType = {
  question: string;
  option: string[];
  handleSubmit: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
