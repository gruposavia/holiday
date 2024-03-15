"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const notVisibleRoutes = ["/es/contact", "/en/contact"];

  const pathname = usePathname();

  const showScrollArrow = !notVisibleRoutes.some((route) =>
    pathname.startsWith(route)
  );
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(showScrollArrow);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showScrollArrow]);

  return (
    <>
      {isVisible && (
        <>
          {/* <div className="scroll-to-top scroll-to-target" onClick={scrollToTop}>
            <span className="icon icon-arrow-top-right"></span>
          </div> */}
        </>
      )}
    </>
  );
}
