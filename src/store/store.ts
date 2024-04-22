import { create } from "zustand";
import { TeamsSlice, createTeamSlice } from "./teams";
import { PlayersSlice, createPlayersSlice } from "./players";
import { DndSlice, createDndSlice } from "./dnd";

export const useAppStore = create<TeamsSlice & PlayersSlice & DndSlice>()(
  (...a) => ({
    ...createTeamSlice(...a),
    ...createPlayersSlice(...a),
    ...createDndSlice(...a),
  })
);
