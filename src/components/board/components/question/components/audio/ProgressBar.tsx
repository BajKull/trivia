interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="h-1 rounded-lg w-full overflow-hidden">
      <div
        className="h-full bg-indigo-700 transition-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
