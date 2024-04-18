import Category from "./components/category/Category";
import { Category as CategoryType } from "./types";

interface BoardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CategoryType[];
}

const Board = ({ data, ...props }: BoardProps) => {
  return (
    <div {...props} className="flex mx-auto w-11/12 basis-1/5 space-x-5">
      {data.map((category) => (
        <Category key={category.id} data={category} />
      ))}
    </div>
  );
};

export default Board;
