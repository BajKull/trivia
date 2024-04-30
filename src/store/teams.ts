import { Team } from "types/types";
import { createTeam } from "utils/utils";
import { StateCreator } from "zustand";

const DEFAULT_TEAMS: Team[] = [];
type HandleAnswer = { points: number; correct: boolean };

export interface TeamsSlice {
  teams: Team[];
  turn?: string;
  setTurn: (id: string) => void;
  setNextTurn: () => void;
  addTeam: (name: string) => void;
  deleteTeam: (id: string) => void;
  resetTeams: () => void;
  modifyPoints: (teamId: string, amount: number) => void;
  handleAnswer: ({ points, correct }: HandleAnswer) => void;
}

export const createTeamSlice: StateCreator<TeamsSlice, [], [], TeamsSlice> = (
  set,
  get
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
  modifyPoints: (teamId, amount) =>
    set(({ teams }) => ({
      teams: teams.map((team) => {
        if (team.id !== teamId) return team;
        return {
          ...team,
          score: team.score + amount,
        };
      }),
    })),
  handleAnswer: ({ correct, points }) => {
    set(({ turn, teams }) => {
      return {
        teams: teams.map((team) => {
          if (team.id !== turn) return team;
          return {
            ...team,
            answers: team.answers + 1,
            ...(correct
              ? {
                  correctAnswers: team.correctAnswers + 1,
                  score: team.score + points,
                }
              : {}),
          };
        }),
      };
    });
    get().setNextTurn();
  },
});
