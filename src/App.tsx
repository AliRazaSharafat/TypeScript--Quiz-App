import React, { useEffect, useState } from "react";
import { getQuizData } from "./services/quiz_services";
import { QuizType } from "./Types/quiz_types";
import QuizCard from "./Components/QuizCard";
import "./App.css";

function App() {
  let [quizData, setQuizData] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuizData(10, "easy");
      setQuizData(result);
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    if (userAns === quizData[currentStep].correct_answer) {
      setScore(++score);
    }

    if (currentStep !== quizData.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      setShowResult(true);
    }
  };

  if (quizData.length === 0) {
    return <h3>Loading....!!</h3>;
  }

  if (showResult === true) {
    return (
      <div>
        <h3>Result</h3>
        <p>
          Your Scode is {score} out of {quizData.length}
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <h3>Quiz Competition</h3>
      <h5>{currentStep + 1}</h5>
      <QuizCard
        question={quizData[currentStep].question}
        option={quizData[currentStep].option}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
