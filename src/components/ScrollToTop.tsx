"use client";

import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "" : "hidden"
      } fixed bottom-8 right-6 lg:bottom-12 lg:right-10 z-40`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-secondary rounded-full text-gray-200 font-bold"
      >
        <ChevronDoubleUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;
