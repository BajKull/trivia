import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import classNames from "classnames";

interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const Draggable = ({
  className,
  id,
  children,
  ...props
}: DraggableProps) => {
  const { setNodeRef, isDragging, attributes, listeners, transform } =
    useDraggable({
      id,
    });

  const cls = classNames(className, {
    "opacity-0": isDragging,
    "opacity-100": !isDragging,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={cls}
      style={style}
      ref={setNodeRef}
      {...props}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};
