import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer";

const QuizContext = createContext();

const useQuiz = () => useContext(QuizContext);

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    currentQuestionIndex: 0,
    selectedQuiz: {},
    score: 0,
  });
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { useQuiz, QuizProvider };
