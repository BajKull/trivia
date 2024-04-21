import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  noBackground?: boolean;
  outline?: boolean;
}

const Button = ({
  className,
  children,
  noBackground,
  outline,
  ...props
}: ButtonProps) => {
  const cls = classNames(
    "text-white rounded-lg py-1 px-3 font-semibold",
    className,
    {
      "bg-indigo-700 hover:bg-indigo-800": !noBackground && !outline,
      "border-4": outline,
    }
  );

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
