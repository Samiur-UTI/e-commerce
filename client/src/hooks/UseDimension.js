import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: windowsWidth, innerHeight: windowsHeight } = window;
  return {
    windowsWidth,
    windowsHeight,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
