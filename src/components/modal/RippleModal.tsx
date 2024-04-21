import { useTransition, animated } from "@react-spring/web";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface RippleModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  color: string;
  close: () => void;
}

const RippleModal = ({ color, show, close, children }: RippleModalProps) => {
  const cls = classNames(
    "fixed bg-gradient-to-br shadow-lg overflow-hidden top-0 left-0 w-full h-full",
    color
  );

  const transition = useTransition(show, {
    from: { opacity: 0, scale: 0, borderRadius: "200px" },
    enter: { opacity: 1, scale: 1, borderRadius: "0" },
    leave: { opacity: 0, scale: 0, borderRadius: "200px" },
  });

  return createPortal(
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={{ ...style }} className={cls}>
              <div className="relative w-full h-full">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="absolute top-5 right-5 border-white border- text-white w-5 h-5 cursor-pointer"
                  onClick={close}
                />
                {children}
              </div>
            </animated.div>
          )
      )}
    </>,
    document.body
  );
};

export default RippleModal;
