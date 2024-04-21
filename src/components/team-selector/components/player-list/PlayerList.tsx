import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    addPlayer(name);
    setName("");
  };

  return (
    <div className="flex flex-col w-80 h-full bg-slate-100 py-5 rounded-md">
      <p className="text-center font-semibold text-xl text-slate-800">
        Players
      </p>
      <div className="pt-5 space-y-2 overflow-y-auto custom-scroll px-5">
        {players.map((player) => (
          <div className="w-full px-5 py-2 bg-slate-200 hover:bg-slate-300 transition-colors rounded-lg flex items-center">
            <p className="font-medium text-sm text-slate-800 max-w-44 truncate">
              {player.name}
            </p>
            <Button
              noBackground
              className="ml-auto text-slate-800"
              onClick={() => deletePlayer(player.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-auto pt-5 px-5">
        <Input
          className="w-full mr-5"
          value={name}
          light
          onChange={(e) => setName(e.target.value)}
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
