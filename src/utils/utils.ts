import { nanoid } from "nanoid";
import { Player, Team } from "../types/types";

export const createTeam = (name: string): Team => ({
  id: nanoid(),
  name,
  answers: 0,
  correctAnswers: 0,
  score: 0,
});

export const createPlayer = (name: string): Player => ({
  id: nanoid(),
  name,
});
