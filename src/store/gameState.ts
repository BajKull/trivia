import { GameState } from "types/types";
import { StateCreator } from "zustand";

export interface GameStateSlice {
  gameState?: GameState;
  round: number;
  setGameState: (gameState?: GameState) => void;
  increaseRound: () => void;
}

export const createGameStateSlice: StateCreator<
  GameStateSlice,
  [],
  [],
  GameStateSlice
> = (set) => ({
  gameState: "teamBuilder",
  round: 1,
  setGameState: (gameState) => set(() => ({ gameState })),
  increaseRound: () => set(({ round }) => ({ round: round + 1 })),
});
