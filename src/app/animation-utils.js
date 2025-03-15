/**
 * Utility functions for JavaScript animations
 */

// Add animation class when element is in viewport
export function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-down, .fade-left, .fade-right, .fade-in, .scale-in"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // Handle staggered children
          if (entry.target.dataset.parent) {
            const children = entry.target.querySelectorAll("[data-child]");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-in");
              }, index * 100);
            });
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  return observer;
}

// Add hover effects to elements
export function setupHoverEffects() {
  const hoverElements = document.querySelectorAll(".hover-scale");

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.05)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });

  const imageElements = document.querySelectorAll(".image-zoom");

  imageElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.1)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
}
