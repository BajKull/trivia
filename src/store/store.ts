import { StateCreator, create } from "zustand";
import { createPlayer, createTeam } from "../utils/utils";
import { Player, Team } from "../types/types";

const DEFAULT_TEAMS: Team[] = [];
const DEFAULT_PLAYERS: Player[] = [];

interface TeamsSlice {
  teams: Team[];
  turn?: string;
  setNextTurn: () => void;
  addTeam: (name: string) => void;
  deleteTeam: (id: string) => void;
  resetTeams: () => void;
}

const createTeamSlice: StateCreator<TeamsSlice, [], [], TeamsSlice> = (
  set
) => ({
  teams: DEFAULT_TEAMS,
  turn: undefined,
  setNextTurn: () =>
    set(({ turn, teams }) => {
      const currentTeamIndex = teams.findIndex(({ id }) => id === turn);
      const nextIndex = (currentTeamIndex + 1) % teams.length;

      return { turn: teams[nextIndex].id };
    }),
  addTeam: (name) =>
    set(({ teams }) => ({ teams: [...teams, createTeam(name)] })),
  deleteTeam: (id) =>
    set(({ teams }) => ({
      teams: teams.filter(({ id: teamId }) => teamId !== id),
    })),
  resetTeams: () => set(() => ({ teams: DEFAULT_TEAMS })),
});

interface PlayersSlice {
  players: Player[];
  addPlayer: (id: string) => void;
  deletePlayer: (id: string) => void;
  assignPlayerToTeam: (playerId: string, teamId?: string) => void;
}

const createPlayersSlice: StateCreator<PlayersSlice, [], [], PlayersSlice> = (
  set
) => ({
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

interface DndSlice {
  dragged?: Player;
  setDragged: (player?: Player) => void;
}

const createDndSlice: StateCreator<DndSlice, [], [], DndSlice> = (set) => ({
  dragged: undefined,
  setDragged: (player) => set(() => ({ dragged: player })),
});

export const useAppStore = create<TeamsSlice & PlayersSlice & DndSlice>()(
  (...a) => ({
    ...createTeamSlice(...a),
    ...createPlayersSlice(...a),
    ...createDndSlice(...a),
  })
);
