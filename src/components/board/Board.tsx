import Category from "./components/category/Category";
import TeamStats from "./components/team-stats/TeamStats";
import { Category as CategoryType } from "./types";

interface BoardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CategoryType[];
}

const Board = ({ data, ...props }: BoardProps) => {
  return (
    <div
      {...props}
      className="flex mx-auto w-11/12 h-full justify-end flex-col relative"
    >
      <div className="max-w-screen-2xl w-11/12 absolute top-0 left-0 right-0 mx-auto">
        <TeamStats />
      </div>
      <div className="max-w-screen-2xl w-11/12 flex space-x-5 backdrop-blur-xl mx-auto bg-glass mb-20">
        {data.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Board;
