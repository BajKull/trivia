import { animated, easings, useSpring } from "@react-spring/web";
import classNames from "classnames";
import ProgressBar from "components/board/components/question/components/audio/ProgressBar";
import Player from "components/team-selector/components/player-list/Player";
import Text from "components/text/Text";
import usePrevious from "hooks/usePrevious";
import { useState } from "react";
import { Player as PlayerType, Team } from "types/types";

type changingScore = "up" | "down" | "none";

interface TeamOverviewProps {
  players: PlayerType[];
  turn: boolean;
  team: Team;
}

const SCORE_ANIMATION_DURATION = 5000;
const SCORE_ANIMATION_DELAY = 250;

const TeamOverview = ({ players, team, turn }: TeamOverviewProps) => {
  const prevScore = usePrevious(team.score);
  const [changingScore, setChangingScore] = useState<changingScore>("none");
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
      <div className="flex justify-between">
        <Text>{team.name}</Text>
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
