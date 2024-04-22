import classNames from "classnames";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  noBackground?: boolean;
  light?: boolean;
  outline?: boolean;
}

const Input = ({
  className,
  light,
  noBackground,
  outline,
  ...props
}: InputProps) => {
  const cls = classNames(
    className,
    "rounded-lg py-2 px-3 font-semibold transition-colors",
    {
      "bg-indigo-700 hover:bg-indigo-800 placeholder-slate-100 text-white":
        !noBackground && !outline && !light,
      "border-4": outline,
      "bg-white": light,
    }
  );
  return <input className={cls} {...props} />;
};

export default Input;
