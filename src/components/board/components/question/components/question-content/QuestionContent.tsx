import Heading from "components/board/components/heading/Heading";
import Text from "components/text/Text";

interface QuestionContentProps {
  category: string;
  question: string;
  points: number;
}

const QuestionContent = ({
  category,
  question,
  points,
}: QuestionContentProps) => {
  return (
    <div className="bg-glass min-w-80">
      <div className="flex justify-between mb-1">
        <Text className="text-slate-300">{category}</Text>
        <Text className="text-slate-300">{points}</Text>
      </div>
      <Heading
        className="text-white text-4xl font-medium leading-relaxed"
        level="h1"
      >
        {question}
      </Heading>
    </div>
  );
};

export default QuestionContent;
