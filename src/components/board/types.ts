import { GradientVariant } from "../../hooks/useTailwindGradient";

export type Answers = [string, string, string, string];

export type Question = {
  question: string;
  answers: Answers;
  correctAnswer: string;
  points?: number;
};

export type Category = {
  id: string;
  name: string;
  questions: Question[];
  gradient: GradientVariant;
};
