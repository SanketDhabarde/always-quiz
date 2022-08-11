import React from "react";
import { createContext, useContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducer";
import { QuizContext } from "./quiz-context.types";

const quizContext = createContext({} as QuizContext);

const { Provider } = quizContext;

const useQuiz = () => useContext(quizContext);

const QuizProvider = ({ children }: any) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  const value = { quizState, quizDispatch };

  return <Provider value={value}>{children}</Provider>;
};

export { useQuiz, QuizProvider, quizContext };
