import { useState, useEffect } from "react";

export const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10); // Adjust speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10); // Update every 10ms for smooth animation

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span className="text-2xl font-semibold">{count} + </span>;
};
