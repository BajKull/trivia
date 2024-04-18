import { GradientVariant } from "../../hooks/useTailwindGradient";

export type Question = {
  question: string;
  answers: [string, string, string, string];
  correctAnswer: string;
  points?: number;
};

export type Category = {
  id: string;
  name: string;
  questions: Question[];
  gradient: GradientVariant;
};
