import { useEffect, useState } from "react";
import Planet from "./Planet";

const Planets = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return (
    <>
      <Planet
        size="lg"
        mousePosition={mousePosition}
        planetPosition={{ x: 320, y: 220 }}
        reverse
      />
      <Planet
        size="2xl"
        mousePosition={mousePosition}
        planetPosition={{ x: 1500, y: 240 }}
      />
      <Planet
        size="xl"
        mousePosition={mousePosition}
        planetPosition={{ x: 370, y: 700 }}
        reverse
      />
    </>
  );
};

export default Planets;
