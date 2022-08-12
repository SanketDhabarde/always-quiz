import { quizReducer, initialState } from "./quiz-reducer";

describe("Testing quiz reducer", () => {
  it("SET_CURRENT_QUESTION_INDEX should set the current question index", () => {
    const expectedState = {
      currentQuestionIndex: 1,
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

    const state = quizReducer(initialState, {
      type: "SET_CURRENT_QUESTION_INDEX",
      payload: 1,
    });

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_QUIZ should select the quiz from categories of quiz", () => {
    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [],
      },
      score: 0,
    };

    const state = quizReducer(initialState, {
      type: "SET_SELECTED_QUIZ",
      payload: {
        _id: "1234",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [],
      },
    });

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_OPTION should select option from the selected quiz, when selected option is correct", () => {
    const initialState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [
          { _id: "1234", question: "", options: [], selectedOption: "" },
          { _id: "4567", question: "", options: [], selectedOption: "" },
          { _id: "890", question: "", options: [], selectedOption: "" },
        ],
      },
      score: 0,
    };

    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [
          { _id: "1234", question: "", options: [], selectedOption: "456" },
          { _id: "4567", question: "", options: [], selectedOption: "" },
          { _id: "890", question: "", options: [], selectedOption: "" },
        ],
      },
      score: 2,
    };

    const state = quizReducer(initialState, {
      type: "SET_SELECTED_OPTION",
      payload: { quizId: "1234", selectedOption: "456", score: 2 },
    });

    expect(state).toEqual(expectedState);
  });

  it("SET_SELECTED_OPTION should select option from the selected quiz, when selected option is wrong", () => {
    const initialState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [
          { _id: "1234", question: "", options: [], selectedOption: "456" },
          { _id: "4567", question: "", options: [], selectedOption: "" },
          { _id: "890", question: "", options: [], selectedOption: "" },
        ],
      },
      score: 0,
    };

    const expectedState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [
          { _id: "1234", question: "", options: [], selectedOption: "456" },
          { _id: "4567", question: "", options: [], selectedOption: "" },
          { _id: "890", question: "", options: [], selectedOption: "" },
        ],
      },
      score: 0,
    };

    const state = quizReducer(initialState, {
      type: "SET_SELECTED_OPTION",
      payload: { quizId: "1234", selectedOption: "456", score: 0 },
    });

    expect(state).toEqual(expectedState);
  });

  it("should have same state in default case", () => {
    const initialState = {
      currentQuestionIndex: 0,
      selectedQuiz: {
        _id: "1234567",
        category: "xyz",
        alt: "",
        image: "",
        title: "",
        quiz: [
          { _id: "1234", question: "", options: [], selectedOption: "456" },
          { _id: "4567", question: "", options: [], selectedOption: "" },
          { _id: "890", question: "", options: [], selectedOption: "" },
        ],
      },
      score: 0,
    };

    const state = quizReducer(initialState, { type: "DEFAULT" });

    expect(state).toEqual(initialState);
  });
});
