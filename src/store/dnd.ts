import { Player } from "types/types";
import { StateCreator } from "zustand";

export interface DndSlice {
  dragged?: Player;
  setDragged: (player?: Player) => void;
}

export const createDndSlice: StateCreator<DndSlice, [], [], DndSlice> = (
  set
) => ({
  dragged: undefined,
  setDragged: (player) => set(() => ({ dragged: player })),
});
