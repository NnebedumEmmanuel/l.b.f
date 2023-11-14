import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { Events, Contact, Blog, Sermons, Gallery, Cause } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Events, Contact, Blog, Sermons, Gallery, Cause]);

  return null;
};

export default ScrollToTop;
