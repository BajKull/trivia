import classNames from "classnames";
import { Question as QuestionType } from "../../types";
import { useState } from "react";
import RippleModal from "components/modal/RippleModal";
import Button from "components/button/Button";
import Answers from "./components/answers/Answers";
import Audio from "./components/audio/Audio";
import Text from "components/text/Text";
import Heading from "../heading/Heading";

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
  const { points, answers, audio, correctAnswer, question } = data;

  const questionPoints = points ?? fallbackPoints;

  const clsBtn = classNames(
    "py-3 bg-gradient-to-br shadow-lg text-white bg-opacity-30",
    color
  );
  const clsContainer = classNames(
    "mx-auto max-w-screen-2xl px-5 py-10 w-full h-full flex flex-col items-center"
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
          <div className="bg-glass">
            <div className="flex justify-between mb-1">
              <Text className="text-slate-300">{category}</Text>
              <Text className="text-slate-300">{questionPoints}</Text>
            </div>
            <Heading
              className="text-white text-4xl font-medium leading-relaxed"
              level="h1"
            >
              {question}
            </Heading>
          </div>
          {answers && <Answers answers={answers} onClick={answerQuestion} />}
          {audio && <Audio audio={audio} color={color} hideMetadata />}
        </div>
      </RippleModal>
      <Button {...props} className={clsBtn} noBackground onClick={openQuestion}>
        {questionPoints}
      </Button>
    </>
  );
};

export default Question;
