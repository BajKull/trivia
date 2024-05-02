import RippleModal from "components/modal/RippleModal";
import QuestionContent from "../question/components/question-content/QuestionContent";
import { Bonus as BonusType } from "components/board/types";

interface BonusProps {
  category: string;
  color: string;
  data: BonusType;
  show: boolean;
  setShow: (val: boolean) => void;
}

const Bonus = ({ category, color, data, show, setShow }: BonusProps) => {
  const { question } = data;
  return (
    <RippleModal color={color} close={() => setShow(false)} show={show}>
      <div className="mx-auto max-w-screen-2xl px-5 py-10 w-full h-full flex flex-col items-center">
        <QuestionContent
          category={category}
          question={question ?? ""}
          points="Bonus"
        />
      </div>
    </RippleModal>
  );
};

export default Bonus;
