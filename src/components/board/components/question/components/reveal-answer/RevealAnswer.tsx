import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";

interface RevealAnswer {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const RevealAnswer = ({ show, setShow }: RevealAnswer) => {
  return (
    <div className="absolute bottom-10 right-10">
      <Button round light onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={show ? faEyeSlash : faEye} color="white" />
      </Button>
    </div>
  );
};

export default RevealAnswer;
