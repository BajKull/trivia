import classNames from "classnames";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  center?: boolean;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  center,
  children,
  className,
  level: HeadingLevel,
  ...props
}: HeadingProps) => {
  const cls = classNames("font-semibold", className, {
    "text-4xl": HeadingLevel === "h1",
    "text-3xl": HeadingLevel === "h2",
    "text-2xl": HeadingLevel === "h3",
    "text-lg": HeadingLevel === "h4",
    "text-base": HeadingLevel === "h5",
    "text-sm": HeadingLevel === "h6",
    "text-center": center,
  });

  return (
    <HeadingLevel className={cls} {...props}>
      {children}
    </HeadingLevel>
  );
};

export default Heading;
