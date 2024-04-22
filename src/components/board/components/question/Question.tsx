import classNames from "classnames";
import { Question as QuestionType } from "../../types";
import { useState } from "react";
import RippleModal from "components/modal/RippleModal";
import Button from "components/button/Button";
import Answers from "./components/answers/Answers";

interface QuestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: QuestionType;
  fallbackPoints: number;
  color: string;
}

const Question = ({ color, data, fallbackPoints, ...props }: QuestionProps) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const { points, answers, correctAnswer, question } = data;

  const clsBtn = classNames(
    "py-3 bg-gradient-to-br shadow-lg text-white bg-opacity-30",
    color
  );
  const clsContainer = classNames(
    "mx-auto max-w-screen-2xl px-5 py-10 w-full h-full flex flex-col",
    {
      "items-center justify-center": !answers?.length,
    }
  );
  const openQuestion = () => setIsQuestionOpen(true);
  const closeQuestion = () => setIsQuestionOpen(false);
  const answerQuestion = (answer: string) => {
    console.log(answer);
  };

  return (
    <>
      <RippleModal color={color} close={closeQuestion} show={isQuestionOpen}>
        <div className={clsContainer}>
          <h1 className="text-white text-center text-4xl font-medium bg-white/30 p-5 rounded-lg shadow-lg">
            {question}
          </h1>
          {answers && <Answers answers={answers} onClick={answerQuestion} />}
        </div>
      </RippleModal>
      <Button {...props} className={clsBtn} noBackground onClick={openQuestion}>
        {points ?? fallbackPoints}
      </Button>
    </>
  );
};

export default Question;
