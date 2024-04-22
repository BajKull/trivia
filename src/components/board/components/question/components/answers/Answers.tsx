import { Answers as AnswersType } from "components/board/types";
import Button from "components/button/Button";

interface AnswersProps {
  answers: AnswersType;
  onClick: (answer: string) => void;
}

const Answers = ({ answers, onClick }: AnswersProps) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-auto">
      {answers?.map((answer) => (
        <Button
          key={answer}
          noBackground
          className="w-full py-4 text-lg bg-white/40 text-white shadow-lg hover:bg-white/50"
          onClick={() => onClick(answer)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default Answers;
