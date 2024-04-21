import { faPlus, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import Input from "components/input/Input";
import { useState } from "react";
import { useAppStore } from "store/store";
import Team from "./Team";

const Teams = () => {
  const [name, setName] = useState("");
  const teams = useAppStore((state) => state.teams);
  const addTeam = useAppStore((state) => state.addTeam);

  const handleAddTeam = () => {
    if (!name) return;
    addTeam(name);
    setName("");
  };

  return (
    <div className="flex flex-col h-full bg-slate-100 py-5 rounded-md w-full">
      <Heading level="h3">Teams</Heading>
      <div className="flex space-x-5 mx-5 py-5 h-full overflow-x-auto custom-scroll max-w-full">
        {teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <div className="flex justify-between w-full mt-auto pt-5 px-5 space-x-3">
        <Input
          className="w-full"
          value={name}
          light
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTeam()}
          placeholder="Team name"
        />
        <Button onClick={handleAddTeam} disabled={!name}>
          <p className="text-nowrap mr-3">Add team</p>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faShuffle} />
        </Button>
      </div>
    </div>
  );
};

export default Teams;
