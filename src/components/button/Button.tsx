import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  const cls = classNames(
    "text-white bg-indigo-700 rounded py-1 px-3 font-semibold",
    className
  );

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
