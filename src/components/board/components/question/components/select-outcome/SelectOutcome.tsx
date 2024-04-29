import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";
import Text from "components/text/Text";

interface SelectOutcomeProps {
  positive: () => void;
  negative: () => void;
  text: string;
}

const SelectOutcome = ({ positive, negative, text }: SelectOutcomeProps) => {
  return (
    <div className="flex bg-glass flex-col space-y-5">
      <Text className="text-white text-xl">{text}</Text>
      <div className="flex justify-center space-x-5">
        <Button
          round
          noBackground
          className="w-12 h-12 shadow-lg bg-white/10 hover:bg-white/20"
          onClick={negative}
        >
          <FontAwesomeIcon icon={faXmark} color="white" />
        </Button>
        <Button
          round
          noBackground
          className="w-12 h-12 shadow-lg bg-white/10 hover:bg-white/20"
          onClick={positive}
        >
          <FontAwesomeIcon icon={faCheck} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default SelectOutcome;
