import { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) return;

      const target = event.target as Node;

      if (!target) return;

      if (!ref.current.contains(target)) {
        handler();
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handler, ref]);
};
