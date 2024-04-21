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
  const players = useAppStore((state) => state.players).filter(
    (player) => player.team === team.id
  );

  return (
    <Droppable
      id={team.id}
      className="w-full max-w-[50%] min-w-80 h-full bg-slate-200 rounded transition-colors"
      isOverClassName="bg-slate-300"
    >
      <div key={team.id} className="px-5 pt-10 w-full h-full relative">
        <Button
          noBackground
          className="absolute top-5 right-5"
          onClick={() => deleteTeam(team.id)}
          aria-label="delete team"
          title="Delete team"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Heading level="h4">{team.name}</Heading>
        <div className="space-y-2 mt-5">
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
      </div>
    </Droppable>
  );
};

export default Team;
