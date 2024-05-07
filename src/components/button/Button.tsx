import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  noBackground?: boolean;
  outline?: boolean;
  light?: boolean;
  round?: boolean;
}

const Button = ({
  className,
  children,
  light,
  round,
  noBackground,
  outline,
  ...props
}: ButtonProps) => {
  const cls = classNames(
    "py-1 px-3 font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed flex flex-nowrap justify-center items-center",
    className,
    {
      "bg-indigo-700 hover:bg-indigo-800 text-white": !noBackground && !outline,
      "border-4": outline,
      "rounded-full": round,
      "rounded-lg ": !round,
      "w-12 h-12 shadow-lg bg-white/10 hover:bg-white/20": light,
    }
  );

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
