import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import Input from "components/input/Input";
import { useState } from "react";
import { useAppStore } from "store/store";

const PlayerList = () => {
  const [name, setName] = useState("");
  const players = useAppStore((state) => state.players);
  const addPlayer = useAppStore((state) => state.addPlayer);
  const deletePlayer = useAppStore((state) => state.deletePlayer);

  const handleAddPlayer = () => {
    if (!name) return;
    addPlayer(name);
    setName("");
  };

  return (
    <div className="flex flex-col w-full h-full bg-slate-100 py-5 rounded-md">
      <Heading level="h3">Players</Heading>
      <div className="pt-5 space-y-2 overflow-y-auto custom-scroll px-5 max-w-full">
        {players.map((player) => (
          <div className="w-full px-5 py-2 bg-slate-200 hover:bg-slate-300 transition-colors rounded-lg flex items-center">
            <p className="font-medium text-sm text-slate-800 max-w-44 truncate">
              {player.name}
            </p>
            <Button
              noBackground
              className="ml-auto text-slate-800"
              onClick={() => deletePlayer(player.id)}
              aria-label="delete player"
              title="Delete player"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-auto pt-5 px-5 space-x-3">
        <Input
          className="w-full"
          value={name}
          light
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddPlayer()}
          placeholder="Name"
        />
        <Button onClick={handleAddPlayer} disabled={!name}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

export default PlayerList;
