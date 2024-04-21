export type Team = {
  id: string;
  name: string;
};

export type Player = {
  id: string;
  name: string;
  team?: string;
  answers: number;
  score: number;
  correctAnswers: number;
};
