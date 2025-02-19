import classNames from "classnames";
import { Audio as AudioType } from "components/board/types";
import { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Text from "components/text/Text";
import Controls from "./Controls";

interface AudioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  audio: AudioType;
  color?: string;
  hideMetadata?: boolean;
}

const Audio = ({
  audio,
  className,
  color,
  hideMetadata,
  onEnded,
  ...props
}: AudioProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const cls = classNames(className);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { author, src, title } = audio;

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const audioProgress = Math.floor(
      (audio.currentTime * 100) / audio.duration
    );
    setProgress(audioProgress);
  };

  const handleOnEnded = (
    event: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    onEnded && onEnded(event);
    setIsAudioPlaying(false);
  };

  return (
    <div className="bg-glass mt-auto relative overflow-hidden w-[600px] flex justify-between">
      <div className="flex space-x-3 items-center">
        <div
          className={classNames(
            "w-10 h-10 rounded-full bg-gradient-to-br",
            color
          )}
        />
        <div className="flex flex-col justify-center h-full w-60 space-y-2">
          <Text
            className="font-semibold h-4 text-white whitespace-nowrap"
            hidden={hideMetadata}
          >
            {title}
          </Text>
          <Text
            className="text-slate-200 text-xs w-40 h-3"
            hidden={hideMetadata}
          >
            {author}
          </Text>
        </div>
      </div>
      <Controls
        audioRef={audioRef}
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />
      <div className="absolute bottom-0 left-0 w-[calc(100%-40px)] mx-5">
        <ProgressBar progress={progress} />
      </div>
      <audio
        className={cls}
        ref={audioRef}
        src={src}
        onEnded={handleOnEnded}
        onTimeUpdate={handleTimeUpdate}
        {...props}
      />
    </div>
  );
};

export default Audio;
