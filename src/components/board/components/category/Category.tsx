import classNames from "classnames";
import { Category as CategoryType } from "../../types";
import Question from "../question/Question";
import useTailwindGradient from "../../../../hooks/useTailwindGradient";
import Text from "components/text/Text";

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
  const cls = classNames(
    props.className,
    "flex flex-col justify-center px-5 w-full p-5 rounded-lg shadow-xl"
  );

  const { name, questions, gradient } = data;
  const colors = useTailwindGradient({ variant: gradient });

  return (
    <div {...props} className={cls}>
      <Text className="text-center text-2xl font-semibold my-5">{name}</Text>
      <div className="flex flex-col space-y-5 mt-5">
        {questions.map((question, index) => (
          <Question
            category={name}
            data={question}
            key={question.question}
            fallbackPoints={100 * (index + 1)}
            color={colors[INDEX_TO_GRADIENT[index as ColorIndex]]}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
