import classNames from "classnames";
import { Category as CategoryType } from "../../types";
import Question from "../question/Question";
import useTailwindGradient from "../../../../hooks/useTailwindGradient";
import Text from "components/text/Text";
import { useState } from "react";
import Bonus from "../bonus/Bonus";

interface CategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CategoryType;
}

const INDEX_TO_GRADIENT = {
  0: 500,
  1: 600,
  2: 700,
  3: 800,
  4: 900,
} as const;

type ColorIndex = keyof typeof INDEX_TO_GRADIENT;

const Category = ({ data, ...props }: CategoryProps) => {
  const [bonusShown, setBonusShown] = useState(false);
  const [answeredAmount, setAnsweredAmount] = useState(0);
  const cls = classNames(
    props.className,
    "flex flex-col justify-center px-5 w-full p-5 rounded-lg shadow-xl"
  );

  const { bonus, name, questions, gradient } = data;
  const colors = useTailwindGradient({ variant: gradient });

  const showBonus = answeredAmount === questions.length;

  return (
    <div {...props} className={cls}>
      <Text className="text-center text-2xl font-semibold my-5">{name}</Text>
      <div className="flex flex-col space-y-5 mt-5">
        {questions.map((question, index) => (
          <Question
            category={name}
            data={question}
            key={`${question.question}-${question.correctAnswer}`}
            fallbackPoints={100 * (index + 1)}
            color={colors[INDEX_TO_GRADIENT[index as ColorIndex]]}
            incrementAnsweredAmount={() =>
              setAnsweredAmount((prev) => prev + 1)
            }
          />
        ))}
      </div>
      {bonus && !bonusShown && (
        <Bonus
          category={name}
          show={showBonus}
          color={colors[700]}
          data={bonus}
          setShow={() => setBonusShown(true)}
        />
      )}
    </div>
  );
};

export default Category;
