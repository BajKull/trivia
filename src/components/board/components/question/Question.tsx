import classNames from "classnames";
import Button from "../../../button/Button";
import { Question as QuestionType } from "../../types";
import { useState } from "react";
import RippleModal from "../../../modal/RippleModal";

interface QuestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: QuestionType;
  fallbackPoints: number;
  color: string;
}

const Question = ({ color, data, fallbackPoints, ...props }: QuestionProps) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const { points, answers, correctAnswer, question } = data;

  const clsBtn = classNames("py-3 bg-gradient-to-br shadow-lg", color);
  const clsContainer = classNames(
    "mx-auto max-w-screen-2xl px-5 py-10 w-full h-full flex flex-col",
    {
      "items-center justify-center": !answers?.length,
    }
  );
  const openQuestion = () => setIsQuestionOpen(true);
  const closeQuestion = () => setIsQuestionOpen(false);

  return (
    <>
      <RippleModal color={color} close={closeQuestion} show={isQuestionOpen}>
        <div className={clsContainer}>
          <h1 className="text-white text-center text-4xl font-medium">
            {question}
          </h1>
          {answers && (
            <div className="grid grid-cols-2 gap-5 mt-auto">
              {answers?.map((answer) => (
                <Button key={answer} outline className="w-full py-4 text-lg">
                  {answer}
                </Button>
              ))}
            </div>
          )}
        </div>
      </RippleModal>
      <Button {...props} className={clsBtn} noBackground onClick={openQuestion}>
        ${points ?? fallbackPoints}
        <p className="text-"></p>
      </Button>
    </>
  );
};

export default Question;
