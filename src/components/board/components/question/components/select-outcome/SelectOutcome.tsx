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
      <Text className="text-white text-xl text-center whitespace-pre-line">
        {text}
      </Text>
      <div className="flex justify-center space-x-5">
        <Button round light onClick={negative}>
          <FontAwesomeIcon icon={faXmark} color="white" />
        </Button>
        <Button round light onClick={positive}>
          <FontAwesomeIcon icon={faCheck} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default SelectOutcome;
