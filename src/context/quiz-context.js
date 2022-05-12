import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const useQuiz = () => useContext(QuizContext);

const QuizProvider = ({ children }) => {
  return <QuizContext.Provider>{children}</QuizContext.Provider>;
};

export { useQuiz, QuizProvider };
