import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
export default function ScrollToTopButton() {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible,setVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
    {visible && (<button onClick={scrollToTop} className="fixed bottom-4 right-4  md:bottom-12 md:right-12 transform -translate-x-1/2 bg-blue-500 backdrop-blur-15 -webkit-backdrop-blur-15 rounded-lg z-50 hover:rounded-xl" >
      <BsArrowUp className="h-8 w-8 invert p-1" />
    </button>) }
    </>
  );
}
