import {
  faEye,
  faEyeSlash,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";

interface ControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls = ({
  audioRef,
  isAudioPlaying,
  setIsAudioPlaying,
  show,
  setShow,
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
        className="w-12 h-12 shadow-lg bg-white/10"
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        <FontAwesomeIcon icon={show ? faEye : faEyeSlash} color="white" />
      </Button>
      <Button
        round
        noBackground
        className="w-12 h-12 shadow-lg bg-white/10"
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