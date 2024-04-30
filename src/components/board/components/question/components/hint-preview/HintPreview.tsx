import Text from "components/text/Text";

interface HintPreviewProps {
  show?: boolean;
  hint: string;
}

const HintPreview = ({ show, hint }: HintPreviewProps) => {
  return (
    <div className="bg-glass mt-20 text-white flex space-x-5 flex-wrap">
      {hint.split(" ").map((hintWord) => (
        <Text className="w-20 h-5" hidden={show}>
          {hintWord}
        </Text>
      ))}
    </div>
  );
};

export default HintPreview;
