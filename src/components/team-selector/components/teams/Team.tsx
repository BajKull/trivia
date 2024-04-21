import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import Droppable from "components/dnd/Droppable";
import { useAppStore } from "store/store";
import { Team as TeamType } from "types/types";
import Player from "../player-list/Player";

interface TeamProps {
  team: TeamType;
}

const Team = ({ team }: TeamProps) => {
  const deleteTeam = useAppStore((state) => state.deleteTeam);
  const assignPlayerToTeam = useAppStore((state) => state.assignPlayerToTeam);
  const players = useAppStore((state) => state.players).filter(
    (player) => player.team === team.id
  );

  const handleDeleteTeam = (id: string) => {
    players.forEach((player) => assignPlayerToTeam(player.id, undefined));
    deleteTeam(id);
  };

  return (
    <Droppable
      id={team.id}
      className="w-full max-w-[50%] min-w-80 h-full bg-slate-200 rounded transition-colors"
      isOverClassName="bg-slate-300"
    >
      <div
        key={team.id}
        className="px-5 pt-10 pb-5 w-full h-full flex flex-col"
      >
        <Heading level="h4" className="line-clamp-2 h-14">
          {team.name}
        </Heading>
        <div className="space-y-2 mt-5">
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
        <Button
          noBackground
          className="mt-auto hover:text-slate-900 text-slate-800 w-full bg-slate-100 py-2 hover:bg-slate-50"
          onClick={() => handleDeleteTeam(team.id)}
          aria-label="delete team"
          title="Delete team"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </Droppable>
  );
};

export default Team;
