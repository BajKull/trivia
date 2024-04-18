import classNames from "classnames";
import Button from "../../../button/Button";
import { Question as QuestionType } from "../../types";

interface QuestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: QuestionType;
  fallbackPoints: number;
  color: string;
}

const Question = ({ color, data, fallbackPoints, ...props }: QuestionProps) => {
  const { points, answers, correctAnswer, question } = data;

  const cls = classNames("py-3 bg-gradient-to-br shadow-lg", color);
  return (
    <Button {...props} className={cls} noBackground>
      ${points ?? fallbackPoints}
      <p className="text-"></p>
    </Button>
  );
};

export default Question;
