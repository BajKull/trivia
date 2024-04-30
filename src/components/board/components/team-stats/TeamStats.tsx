import { useAppStore } from "store/store";
import Text from "components/text/Text";
import Player from "components/team-selector/components/player-list/Player";
import classNames from "classnames";
import ProgressBar from "../question/components/audio/ProgressBar";

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
          <div
            className={classNames(
              "bg-glass w-96 font-semibold h-fit pt-10 -mt-5 transition-transform relative overflow-hidden",
              { "-translate-y-[calc(100%-84px)]": !teamTurn }
            )}
            key={`team-stats-${team.id}`}
          >
            <div className="flex flex-col space-y-2 mb-5 max-h-48 py-1 overflow-y-auto overflow-x-hidden custom-scroll">
              {teamPlayers.map((player) => (
                <Player
                  player={player}
                  notDraggable
                  key={`team-stats-player-${player.id}`}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <Text>{team.name}</Text>
              <Text>{team.score}</Text>
            </div>
            {teamTurn && (
              <div className="absolute bottom-0 left-0 h-1 w-full">
                <ProgressBar progress={100} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamStats;
