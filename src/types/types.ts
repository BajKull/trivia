export type Team = {
  id: string;
  name: string;
  answers: number;
  score: number;
  correctAnswers: number;
};

export type Player = {
  id: string;
  name: string;
  team?: string;
};

export type GameState = "teamBuilder" | "game" | "results";
