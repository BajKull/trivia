import Category from "./components/category/Category";
import { Category as CategoryType } from "./types";

interface BoardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CategoryType[];
}

const Board = ({ data, ...props }: BoardProps) => {
  return (
    <div {...props} className="flex mx-auto w-11/12">
      <div className="max-w-screen-2xl max-h-[90%] p-5 w-11/12 h-full flex space-x-5 rounded-xl bg-white/40 shadow-xl backdrop-blur-xl mx-auto">
        {data.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Board;
