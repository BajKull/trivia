import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";
import { Draggable } from "components/dnd/Draggable";
import Text from "components/text/Text";
import { useAppStore } from "store/store";
import { Player as PlayerType } from "types/types";

interface PlayerProps {
  player: PlayerType;
  notDraggable?: boolean;
}

const Player = ({ player, notDraggable }: PlayerProps) => {
  const deletePlayer = useAppStore((state) => state.deletePlayer);

  const renderPlayer = () => (
    <div className="w-full px-5 py-2 shadow transition-colors rounded-lg flex items-center relative h-10 hover:bg-white/10">
      <Text className="font-medium text-sm max-w-44 truncate">
        {player.name}
      </Text>
      {!player.team && (
        <Button
          noBackground
          className="ml-auto absolute right-5"
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
