import { useState, useEffect } from "react";

/*
   useScrollToTop
   Tracks window scroll and returns:
   - showButton: boolean → should the "Scroll to Top" button be visible
   - scrollToTop: function → scrolls smoothly to the top
   threshold: number of pixels scrolled before showing the button
 */
export default function useScrollToTop(threshold = 300) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // called on every scroll
    const handleScroll = () => {
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  // scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { showButton, scrollToTop };
}