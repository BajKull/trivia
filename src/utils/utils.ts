import { nanoid } from "nanoid";
import { Player, Team } from "../types/types";

export const createTeam = (name: string): Team => ({
  id: nanoid(),
  name,
});

export const createPlayer = (name: string): Player => ({
  answers: 0,
  correctAnswers: 0,
  id: nanoid(),
  name,
  score: 0,
});
