import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";

interface DroppableProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  isOverClassName?: string;
}

const Droppable = ({
  id,
  className,
  children,
  isOverClassName = "",
  ...props
}: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const cls = classNames(className, {
    [isOverClassName]: isOver,
  });

  return (
    <div ref={setNodeRef} className={cls} {...props}>
      {children}
    </div>
  );
};

export default Droppable;
