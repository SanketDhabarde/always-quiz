export type Option = {
  _id: string;
  option: string;
  isCorrect: boolean;
};

export type Quiz = {
  _id: string;
  question: string;
  options: Option[];
  selectedOption: string;
};

export type Quizz = {
  _id: string;
  alt: string;
  image: string;
  category: string;
  title: string;
  quiz: Quiz[];
};
