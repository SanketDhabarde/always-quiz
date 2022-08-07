type Option = {
  _id: string;
  option: string;
  isCorrect: boolean;
};

type Quiz = {
  _id: string;
  question: string;
  options: Option[];
};

export type Quizz = {
  _id: string;
  alt: string;
  image: string;
  category: string;
  title: string;
  quiz: Quiz[];
};
