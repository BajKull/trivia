import { Player } from "types/types";
import { createPlayer } from "utils/utils";
import { StateCreator } from "zustand";

const DEFAULT_PLAYERS: Player[] = [];

export interface PlayersSlice {
  players: Player[];
  addPlayer: (id: string) => void;
  deletePlayer: (id: string) => void;
  assignPlayerToTeam: (playerId: string, teamId?: string) => void;
}

export const createPlayersSlice: StateCreator<
  PlayersSlice,
  [],
  [],
  PlayersSlice
> = (set) => ({
  players: DEFAULT_PLAYERS,
  addPlayer: (name) =>
    set(({ players }) => ({ players: [...players, createPlayer(name)] })),
  deletePlayer: (id) =>
    set(({ players }) => ({
      players: players.filter(({ id: playerId }) => playerId !== id),
    })),
  assignPlayerToTeam: (playerId, teamId) => {
    return set(({ players }) => ({
      players: players.map((player) => {
        if (playerId !== player.id) return player;
        return { ...player, team: teamId };
      }),
    }));
  },
});
