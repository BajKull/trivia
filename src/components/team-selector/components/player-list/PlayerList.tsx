import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import Input from "components/input/Input";
import { useState } from "react";
import { useAppStore } from "store/store";
import Player from "./Player";

const PlayerList = () => {
  const [name, setName] = useState("");
  const players = useAppStore((state) => state.players).filter(
    (player) => !player.team
  );
  const addPlayer = useAppStore((state) => state.addPlayer);

  const handleAddPlayer = () => {
    if (!name) return;
    addPlayer(name);
    setName("");
  };

  return (
    <div className="flex flex-col w-full h-full py-5 rounded-md">
      <Heading center level="h3">
        Players
      </Heading>
      <div className="pt-5 space-y-2 overflow-y-auto overflow-x-hidden custom-scroll px-5 max-w-full h-full">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div className="flex justify-between w-full mt-auto pt-5 px-5 space-x-3">
        <Input
          className="w-full"
          value={name}
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
