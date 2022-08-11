import { QuizAction, QuizInitialState } from "../context/quiz-context.types";

export const initialState: QuizInitialState = {
  currentQuestionIndex: 0,
  selectedQuiz: {
    _id: "",
    alt: "",
    image: "",
    category: "",
    title: "",
    quiz: [],
  },
  score: 0,
};

export const quizReducer = (state = initialState, action: QuizAction) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION_INDEX":
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    case "SET_SELECTED_QUIZ":
      return {
        ...state,
        selectedQuiz: { ...action.payload },
        currentQuestionIndex: 0,
        score: 0,
      };
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          quiz: state.selectedQuiz.quiz.map((eachQuiz) =>
            eachQuiz._id === action.payload.quizId
              ? { ...eachQuiz, selectedOption: action.payload.selectedOption }
              : eachQuiz
          ),
        },
        score: state.score + action.payload.score,
      };
    default:
      return state;
  }
};
