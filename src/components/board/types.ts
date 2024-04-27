import { GradientVariant } from "../../hooks/useTailwindGradient";

export type Answers = [string, string, string, string];
export type Audio = {
  src: string;
  author: string;
  title: string;
};

export type Question = {
  question: string;
  answers?: Answers;
  correctAnswer: string;
  points?: number;
  audio?: Audio;
};

export type Category = {
  id: string;
  name: string;
  questions: Question[];
  gradient: GradientVariant;
};
