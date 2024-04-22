import { create } from "zustand";
import { TeamsSlice, createTeamSlice } from "./teams";
import { PlayersSlice, createPlayersSlice } from "./players";
import { DndSlice, createDndSlice } from "./dnd";
import { GameStateSlice, createGameStateSlice } from "./gameState";

type Store = TeamsSlice & PlayersSlice & DndSlice & GameStateSlice;

export const useAppStore = create<Store>()((...a) => ({
  ...createTeamSlice(...a),
  ...createPlayersSlice(...a),
  ...createDndSlice(...a),
  ...createGameStateSlice(...a),
}));
