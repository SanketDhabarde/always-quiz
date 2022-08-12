import { Quizz } from "../data/quizzes.types";

export type QuizInitialState = {
  currentQuestionIndex: number;
  selectedQuiz: Quizz;
  score: number;
};

export type QuizAction =
  | {
      type: "SET_CURRENT_QUESTION_INDEX";
      payload: number;
    }
  | {
      type: "SET_SELECTED_QUIZ";
      payload: Quizz;
    }
  | {
      type: "SET_SELECTED_OPTION";
      payload: {
        quizId: string;
        selectedOption: string;
        score: number;
      };
    }
  | {
      type: "DEFAULT";
    };

export type QuizDispatch = (action: QuizAction) => void;

export type QuizContext = {
  quizState: QuizInitialState;
  quizDispatch: QuizDispatch;
};
