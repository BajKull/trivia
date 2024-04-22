import { GameState } from "types/types";
import { StateCreator } from "zustand";

export interface GameStateSlice {
  gameState?: GameState;
  setGameState: (gameState?: GameState) => void;
}

export const createGameStateSlice: StateCreator<
  GameStateSlice,
  [],
  [],
  GameStateSlice
> = (set) => ({
  gameState: "teamBuilder",
  setGameState: (gameState) => set(() => ({ gameState })),
});
