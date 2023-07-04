import React, { useState, useEffect } from "react";


const ToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollDistance = documentHeight - windowHeight;
    const scrollPercent = Math.round((scrollTop / scrollDistance) * 100);
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  const [circumference, setCircumference] = useState(0);
 let size = 200;
 let strokeWidth = 10;
 let progress = scrollPercent;
  useEffect(() => {
    const radius = size / 2;
    const circleCircumference = 2 * Math.PI * radius;
    setCircumference(circleCircumference);
  }, [size]);

  const progressOffset = circumference - (progress / 100) * circumference;



  return (
    <div
      className="to-top-button"
      style={{ opacity: scrollPercent > 10 ? 1 : 0 }}
    >
     
      <svg className="circular-progress" width={size} height={size}>
        <circle
          className="circular-progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />


 {/* <button
        onClick={scrollToTop}
        style={{ border: `${(scrollPercent / 100) * 10}px solid #00eeff` }}
      >
        <span>Top</span>
        <span className="scroll-percent">{scrollPercent}%</span>
      </button> */}
jhkhjkjhk

        <circle
          className="circular-progress-fill"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
    </div>
  );
};

export default ToTopButton;
