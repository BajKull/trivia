import { useAppStore } from "store/store";
import TeamOverview from "./components/team-overview/TeamOverview";

const TeamStats = () => {
  const turn = useAppStore((store) => store.turn);
  const teams = useAppStore((store) => store.teams);
  const players = useAppStore((store) => store.players);

  return (
    <div className="flex justify-center space-x-5 h-fit">
      {teams.map((team) => {
        const teamPlayers = players.filter(
          ({ team: teamId }) => team.id === teamId
        );
        const teamTurn = team.id === turn;
        return (
          <TeamOverview
            key={`team-stats-${team.id}`}
            team={team}
            players={teamPlayers}
            turn={teamTurn}
          />
        );
      })}
    </div>
  );
};

export default TeamStats;
