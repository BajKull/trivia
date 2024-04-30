import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, easings, useSpring } from "@react-spring/web";
import classNames from "classnames";
import ProgressBar from "components/board/components/question/components/audio/ProgressBar";
import Button from "components/button/Button";
import Input from "components/input/Input";
import Player from "components/team-selector/components/player-list/Player";
import Text from "components/text/Text";
import usePrevious from "hooks/usePrevious";
import { useState } from "react";
import { useAppStore } from "store/store";
import { Player as PlayerType, Team } from "types/types";

type ChangingScore = "up" | "down" | "none";

interface TeamOverviewProps {
  players: PlayerType[];
  turn: boolean;
  team: Team;
}

const SCORE_ANIMATION_DURATION = 5000;
const SCORE_ANIMATION_DELAY = 250;

const TeamOverview = ({ players, team, turn }: TeamOverviewProps) => {
  const [changingScore, setChangingScore] = useState<ChangingScore>("none");
  const [showModifyScore, setShowModifyScore] = useState(false);
  const [modifyScoreAmount, setModifyScoreAmount] = useState(0);

  const modifyPoints = useAppStore((state) => state.modifyPoints);

  const prevScore = usePrevious(team.score);
  const teamScore = useSpring({
    score: team.score,
    delay: SCORE_ANIMATION_DELAY,
    config: {
      duration: SCORE_ANIMATION_DURATION,
      easing: easings.easeInOutExpo,
    },
    onStart: () =>
      setChangingScore(team.score > (prevScore ?? 0) ? "up" : "down"),
    onResolve: () => setChangingScore("none"),
  });

  const handlePointsChange = (modifier = 1) => {
    modifyPoints(team.id, modifyScoreAmount * modifier);
    setShowModifyScore(false);
  };

  return (
    <div
      className={classNames(
        "bg-glass w-96 font-semibold h-fit pt-10 -mt-5 transition-transform relative overflow-hidden",
        { "-translate-y-[calc(100%-84px)]": !turn }
      )}
    >
      <div className="flex flex-col space-y-2 mb-5 max-h-48 py-1 overflow-y-auto overflow-x-hidden custom-scroll">
        {players.map((player) => (
          <Player
            player={player}
            notDraggable
            key={`team-stats-player-${player.id}`}
          />
        ))}
      </div>
      <div className="flex relative w-full">
        {showModifyScore && (
          <div className="absolute top-0 left-0 w-1/2 h-full flex space-x-1 text-xs ">
            <Input
              value={modifyScoreAmount}
              onChange={(e) => setModifyScoreAmount(parseInt(e.target.value))}
              className="h-full"
              placeholder="Points"
            />
            <Button
              aria-label="add"
              title="Add"
              onClick={() => handlePointsChange()}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Button
              aria-label="subtract"
              title="Subtract"
              onClick={() => handlePointsChange(-1)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </div>
        )}
        {!showModifyScore && <Text>{team.name}</Text>}
        <button
          className="ml-auto"
          onClick={() => setShowModifyScore((prev) => !prev)}
        >
          <Text
            className={classNames(
              "transition-transform",
              changingScore === "up" && "text-green-600 scale-125",
              changingScore === "down" && "text-red-600 scale-125"
            )}
          >
            <animated.span>
              {teamScore.score.to((val) => val.toFixed(0))}
            </animated.span>
          </Text>
        </button>
      </div>
      {turn && (
        <div className="absolute bottom-0 left-0 h-1 w-full">
          <ProgressBar progress={100} />
        </div>
      )}
    </div>
  );
};

export default TeamOverview;
