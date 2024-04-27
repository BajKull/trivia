import { animated, useTransition } from "@react-spring/web";
import classNames from "classnames";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  hidden?: boolean;
}

const Text = ({ hidden, className, children, ...props }: TextProps) => {
  const cls = classNames(className, {
    "bg-white/20 rounded-xl": hidden,
  });

  const transition = useTransition(!hidden, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  if (hidden === undefined)
    return (
      <p className={cls} {...props}>
        {children}
      </p>
    );

  return (
    <p className={cls} {...props}>
      {transition(
        (style, item) =>
          item && (
            <animated.span style={{ ...style }} className={cls}>
              {children}
            </animated.span>
          )
      )}
    </p>
  );
};

export default Text;
