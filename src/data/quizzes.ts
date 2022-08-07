import { v4 as uuid } from "uuid";
import { Quizz } from "./quizzes.types";

export const quizzes: Quizz[] = [
  {
    _id: uuid(),
    alt: "onePiece",
    image:
      "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(17)(76).jpg",
    category: "One Piece",
    title: "How well do you know One piece?",
    quiz: [
      {
        _id: uuid(),
        question:
          "Who promised that they would never lose another fight until they defeated a certain someone?",
        options: [
          { _id: uuid(), option: "Zoro", isCorrect: true },
          { _id: uuid(), option: "Luffy", isCorrect: false },
          { _id: uuid(), option: "Sanji", isCorrect: false },
          { _id: uuid(), option: "Usopp", isCorrect: false },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question:
          "How many crewmates did Luffy say he wanted at the beginning of the series?",
        options: [
          { _id: uuid(), option: "9", isCorrect: false },
          { _id: uuid(), option: "13", isCorrect: false },
          { _id: uuid(), option: "10", isCorrect: true },
          { _id: uuid(), option: "15", isCorrect: false },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question: "Who was the first recruit of the SH crew?",
        options: [
          { _id: uuid(), option: "Zoro", isCorrect: true },
          { _id: uuid(), option: "Nami", isCorrect: false },
          { _id: uuid(), option: "Sanji", isCorrect: false },
          { _id: uuid(), option: "Usopp", isCorrect: false },
        ],
        selectedOption: "",
      },
    ],
  },
  {
    _id: uuid(),
    alt: "harryPotter",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/2ALpKvBMkEBbw6qL3BfOVV/28e0d10b59b62e9bb64af6236d5578a8/HP-F1-philosophers-stone-harry-ron-hermione-courtyard-happy-web-landscape?fm=webp&q=70&w=2560",
    category: "Harry Potter",
    title: "How well do you know the Harry Potter?",
    quiz: [
      {
        _id: uuid(),
        question: "What is the name of the fifth book?",
        options: [
          {
            _id: uuid(),
            option: "Harry potter and the goblet of fire",
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: "Harry potter and the deathly hallows",
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: "Harry potter and the half-blood prince",
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: "Harry potter and the order of pheonix",
            isCorrect: true,
          },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question:
          "When Harry was looking for a place for Dumbledore’s Army meetings, who told him about the Room of Requirement?",
        options: [
          { _id: uuid(), option: "Naville", isCorrect: false },
          { _id: uuid(), option: "Dobby", isCorrect: true },
          { _id: uuid(), option: "Sirius", isCorrect: false },
          { _id: uuid(), option: "George", isCorrect: false },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question:
          "What was the name of Hagrid’s three-headed dog that guarded the Philosopher’s Stone?",
        options: [
          { _id: uuid(), option: "Tiny", isCorrect: false },
          { _id: uuid(), option: "Snuggles", isCorrect: false },
          { _id: uuid(), option: "Fluffy", isCorrect: true },
          { _id: uuid(), option: "Bruce", isCorrect: false },
        ],
        selectedOption: "",
      },
    ],
  },
  {
    _id: uuid(),
    alt: "avengers",
    image:
      "https://www.ultimatequizquestions.com/wp-content/uploads/2021/03/avengers-trivia-questions.webp",
    category: "Avengers",
    title: "How much do you know about Avangers?",
    quiz: [
      {
        _id: uuid(),
        question: "How many Infinity Stones are there?",
        options: [
          {
            _id: uuid(),
            option: "Two",
            isCorrect: false,
          },
          { _id: uuid(), option: "Five", isCorrect: false },
          {
            _id: uuid(),
            option: "Three",
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: "Six",
            isCorrect: true,
          },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question: "Where is Captain America from?",
        options: [
          {
            _id: uuid(),
            option: "India",
            isCorrect: false,
          },
          { _id: uuid(), option: "London", isCorrect: false },
          {
            _id: uuid(),
            option: "Brooklyn",
            isCorrect: true,
          },
          {
            _id: uuid(),
            option: "Japan",
            isCorrect: false,
          },
        ],
        selectedOption: "",
      },
      {
        _id: uuid(),
        question: "Who was able to pick up Thor’s hammer in Endgame?",
        options: [
          { _id: uuid(), option: "Captain America", isCorrect: true },
          { _id: uuid(), option: "Iron man", isCorrect: false },
          { _id: uuid(), option: "Hulk", isCorrect: false },
          { _id: uuid(), option: "Spiderman", isCorrect: false },
        ],
        selectedOption: "",
      },
    ],
  },
];
