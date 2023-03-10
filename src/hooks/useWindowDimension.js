import { useState, useEffect } from "react";

const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const getCurrentWindowDimension = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", getCurrentWindowDimension);

    return () => {
      window.removeEventListener("resize", getCurrentWindowDimension);
    };
  }, []);

  return { width: windowDimension.width, height: windowDimension.height };
};

export default useWindowDimension;
