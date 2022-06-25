import { quizReducer, initialState } from "./quiz-reducer";

describe("Testing quiz reducer", () => {
  it("SET_CURRENT_QUESTION_INDEX should set the current question index", () => {
    const action = {
      type: "SET_CURRENT_QUESTION_INDEX",
      payload: 1,
    };

    const expectedState = {
      currentQuestionIndex: 1,
      selectedQuiz: {},
      score: 0,
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_QUIZ should select the quiz from categories of quiz", () => {
    const action = {
      type: "SET_SELECTED_QUIZ",
      payload: { _id: "1234", category: "xyz" },
    };

    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: { _id: "1234", category: "xyz" },
      score: 0,
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_OPTION should select option from the selected quiz, when selected option is correct", () => {
    const initialState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        quiz: [{ _id: "1234" }, { _id: "4567" }, { _id: "890" }],
      },
      score: 0,
    };

    const action = {
      type: "SET_SELECTED_OPTION",
      payload: {
        quizId: "1234",
        selectedOption: "456",
        score: 2,
      },
    };

    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        quiz: [
          { _id: "1234", selectedOption: "456" },
          { _id: "4567" },
          { _id: "890" },
        ],
      },
      score: 2,
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_OPTION should select option from the selected quiz, when selected option is wrong", () => {
    const initialState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        quiz: [{ _id: "1234" }, { _id: "4567" }, { _id: "890" }],
      },
      score: 2,
    };

    const action = {
      type: "SET_SELECTED_OPTION",
      payload: {
        quizId: "1234",
        selectedOption: "456",
        score: 0,
      },
    };

    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        quiz: [
          { _id: "1234", selectedOption: "456" },
          { _id: "4567" },
          { _id: "890" },
        ],
      },
      score: 2,
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
