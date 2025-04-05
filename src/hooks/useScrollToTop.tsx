
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that scrolls the window to the top whenever
 * the pathname in the location changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
};

export default useScrollToTop;
