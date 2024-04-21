import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import { useAppStore } from "store/store";
import { Team as TeamType } from "types/types";

interface TeamProps {
  team: TeamType;
}

const Team = ({ team }: TeamProps) => {
  const deleteTeam = useAppStore((state) => state.deleteTeam);

  return (
    <div
      key={team.id}
      className="bg-slate-200 px-5 pt-10 rounded max-w-[50%] min-w-80 w-full h-full relative"
    >
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
    </div>
  );
};

export default Team;
