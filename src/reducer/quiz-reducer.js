const initialState = {
  currentQuestionIndex: 0,
  selectedQuiz: {},
  score: 0,
};

const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_QUESTION_INDEX":
      return {
        ...state,
        currentQuestionIndex: payload,
      };
    case "SET_SELECTED_QUIZ":
      return {
        ...state,
        selectedQuiz: { ...payload },
        currentQuestionIndex: 0,
        score: 0,
      };
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          quiz: state.selectedQuiz.quiz.map((eachQuiz) =>
            eachQuiz._id === payload.quizId
              ? { ...eachQuiz, selectedOption: payload.selectedOption }
              : eachQuiz
          ),
        },
        score: state.score + payload.score,
      };
    default:
      return state;
  }
};

export { quizReducer, initialState };
