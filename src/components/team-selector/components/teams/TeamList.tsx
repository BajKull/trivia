import { faPlay, faPlus, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "components/board/components/heading/Heading";
import Button from "components/button/Button";
import Input from "components/input/Input";
import { useState } from "react";
import { useAppStore } from "store/store";
import Team from "./Team";

const TeamList = () => {
  const [name, setName] = useState("");
  const teams = useAppStore((state) => state.teams);
  const players = useAppStore((state) => state.players);
  const assignPlayerToTeam = useAppStore((state) => state.assignPlayerToTeam);
  const addTeam = useAppStore((state) => state.addTeam);
  const setGameState = useAppStore((state) => state.setGameState);

  const handleAddTeam = () => {
    if (!name) return;
    addTeam(name);
    setName("");
  };

  const shufflePlayers = () => {
    if (!teams.length) return;

    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    const startingIndex = Math.floor(Math.random() * teams.length);

    shuffledPlayers.forEach((player, i) =>
      assignPlayerToTeam(
        player.id,
        teams[(startingIndex + i) % teams.length].id
      )
    );
  };

  const startGame = () => {
    if (!teams.length) {
      return console.log("there are no teams");
    }

    const occupiedTeams = [...new Set(players.map((player) => player.team))];

    if (occupiedTeams.some((team) => !team)) {
      return console.log("there are unassigned players");
    }

    if (teams.some((team) => !occupiedTeams.includes(team.id))) {
      return console.log("there are empty teams");
    }

    setGameState("game");
  };

  return (
    <div className="flex flex-col h-full py-5 rounded-md w-full">
      <Heading level="h3">Teams</Heading>
      <div className="flex space-x-5 p-5 h-full overflow-x-auto custom-scroll-x max-w-full overflow-y-hidden">
        {teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <div className="flex justify-between w-full mt-auto pt-5 px-5 space-x-3">
        <Input
          className="w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTeam()}
          placeholder="Team name"
        />
        <Button
          onClick={handleAddTeam}
          disabled={!name}
          title="Add team"
          aria-label="add team"
          className="min-w-10"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button
          onClick={shufflePlayers}
          disabled={!teams.length || !players.length}
          title="Shuffle teams"
          aria-label="shuffle teams"
          className="min-w-10"
        >
          <FontAwesomeIcon icon={faShuffle} />
        </Button>
        <Button
          title="Start game"
          aria-label="start game"
          className="min-w-10"
          onClick={startGame}
        >
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </div>
  );
};

export default TeamList;
