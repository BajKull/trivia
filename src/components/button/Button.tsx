import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  noBackground: boolean;
}

const Button = ({
  className,
  children,
  noBackground,
  ...props
}: ButtonProps) => {
  const cls = classNames(
    "text-white rounded py-1 px-3 font-semibold",
    className,
    {
      "bg-indigo-700": !noBackground,
    }
  );

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
