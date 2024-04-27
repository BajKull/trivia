import { Team } from "types/types";
import { createTeam } from "utils/utils";
import { StateCreator } from "zustand";

const DEFAULT_TEAMS: Team[] = [];

export interface TeamsSlice {
  teams: Team[];
  turn?: string;
  setTurn: (id: string) => void;
  setNextTurn: () => void;
  addTeam: (name: string) => void;
  deleteTeam: (id: string) => void;
  resetTeams: () => void;
}

export const createTeamSlice: StateCreator<TeamsSlice, [], [], TeamsSlice> = (
  set
) => ({
  teams: DEFAULT_TEAMS,
  turn: undefined,
  setTurn: (teamId) => set(() => ({ turn: teamId })),
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
