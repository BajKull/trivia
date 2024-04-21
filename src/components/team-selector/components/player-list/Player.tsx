import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";
import { Draggable } from "components/dnd/Draggable";
import { useAppStore } from "store/store";
import { Player as PlayerType } from "types/types";

interface PlayerProps {
  player: PlayerType;
  notDraggable?: boolean;
}

const Player = ({ player, notDraggable }: PlayerProps) => {
  const deletePlayer = useAppStore((state) => state.deletePlayer);

  const renderPlayer = () => (
    <div className="w-full px-5 py-2 bg-slate-50 hover:bg-white transition-colors rounded-lg flex items-center">
      <p className="font-medium text-sm text-slate-800 max-w-44 truncate">
        {player.name}
      </p>
      {!player.team && (
        <Button
          noBackground
          className="ml-auto text-slate-800"
          onClick={() => deletePlayer(player.id)}
          aria-label="delete player"
          title="Delete player"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      )}
    </div>
  );

  if (notDraggable) return renderPlayer();

  return <Draggable id={player.id}>{renderPlayer()}</Draggable>;
};

export default Player;
