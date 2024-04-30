import classNames from "classnames";

type Size = "sm" | "base" | "lg" | "xl" | "2xl";

interface Planet {
  mousePosition: { x: number; y: number };
  planetPosition: { x: number; y: number };
  size: Size;
  reverse?: boolean;
}

const SIZE_TO_TRANSFORM_DIVISION: Record<Size, number> = {
  sm: 100,
  base: 115,
  lg: 130,
  xl: 145,
  "2xl": 160,
};

const Planet = ({ mousePosition, planetPosition, reverse, size }: Planet) => {
  const cls = classNames(
    "rounded-full absolute from-purple-400 via-rose-300 to-indigo-400 bg-gradient-to-br shadow-xl shadow-rose-300",
    {
      "w-32 h-32": size === "sm",
      "w-40 h-40": size === "base",
      "w-52 h-52": size === "lg",
      "w-64 h-64": size === "xl",
      "w-80 h-80": size === "2xl",
    }
  );

  const direction = reverse ? -1 : 1;

  const basePosition = {
    left: `${planetPosition.x}px`,
    top: `${planetPosition.y}px`,
  };

  const transformation = {
    transform: `translate(${
      ((mousePosition.x - planetPosition.x) /
        SIZE_TO_TRANSFORM_DIVISION[size]) *
      direction
    }px, ${
      ((mousePosition.y - planetPosition.y) /
        SIZE_TO_TRANSFORM_DIVISION[size]) *
      direction
    }px)`,
  };

  return <div className={cls} style={{ ...basePosition, ...transformation }} />;
};

export default Planet;
