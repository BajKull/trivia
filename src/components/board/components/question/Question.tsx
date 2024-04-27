import classNames from "classnames";
import { Question as QuestionType } from "../../types";
import { useState } from "react";
import RippleModal from "components/modal/RippleModal";
import Button from "components/button/Button";
import Answers from "./components/answers/Answers";
import Audio from "./components/audio/Audio";
import SelectOutcome from "./components/select-outcome/SelectOutcome";
import QuestionContent from "./components/question-content/QuestionContent";
import { useAppStore } from "store/store";

interface QuestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  data: QuestionType;
  fallbackPoints: number;
  color: string;
}

const Question = ({
  category,
  color,
  data,
  fallbackPoints,
  ...props
}: QuestionProps) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);
  const { points, answers, audio, correctAnswer, question } = data;

  const handleAnswer = useAppStore((state) => state.handleAnswer);

  const questionPoints = points ?? fallbackPoints;

  const clsBtn = classNames(
    "py-3 bg-gradient-to-br shadow-lg text-white bg-opacity-30",
    color,
    {
      grayscale: answered,
    }
  );
  const clsContainer = classNames(
    "mx-auto max-w-screen-2xl px-5 py-10 w-full h-full flex flex-col items-center"
  );

  const handleCorrectAnswer = () => {
    handleAnswer({ correct: true, points: questionPoints });
    setIsQuestionOpen(false);
    setAnswered(true);
  };

  const handleIncorrectAnswer = () => {
    handleAnswer({ correct: false, points: questionPoints });
    setIsQuestionOpen(false);
    setAnswered(true);
  };

  const openQuestion = () => setIsQuestionOpen(true);
  const closeQuestion = () => setIsQuestionOpen(false);
  const answerQuestion = (answer: string) => {
    console.log(answer);
  };

  return (
    <>
      <RippleModal color={color} close={closeQuestion} show={isQuestionOpen}>
        <div className={clsContainer}>
          <QuestionContent
            category={category}
            question={question}
            points={questionPoints}
          />
          {revealAnswer && (
            <div className="mt-20">
              <SelectOutcome
                text={correctAnswer}
                positive={handleCorrectAnswer}
                negative={handleIncorrectAnswer}
              />
            </div>
          )}
          {answers && <Answers answers={answers} onClick={answerQuestion} />}
          {audio && (
            <Audio
              audio={audio}
              color={color}
              hideMetadata
              setRevealAnswer={setRevealAnswer}
            />
          )}
        </div>
      </RippleModal>
      <Button
        {...props}
        className={clsBtn}
        noBackground
        onClick={openQuestion}
        disabled={answered}
      >
        {questionPoints}
      </Button>
    </>
  );
};

export default Question;
