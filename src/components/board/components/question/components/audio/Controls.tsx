import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";

interface ControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls = ({
  audioRef,
  isAudioPlaying,
  setIsAudioPlaying,
}: ControlsProps) => {
  const playSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.ended) {
      audio.play();
      return setIsAudioPlaying(true);
    }

    audio.pause();
    setIsAudioPlaying(false);
  };

  return (
    <div className="flex space-x-3">
      <Button
        round
        noBackground
        className="w-12 h-12 shadow-lg bg-white/10 hover:bg-white/20"
        onClick={playSound}
      >
        <FontAwesomeIcon
          icon={isAudioPlaying ? faPause : faPlay}
          color="white"
        />
      </Button>
    </div>
  );
};

export default Controls;
