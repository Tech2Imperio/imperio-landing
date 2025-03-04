import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";

    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      ghost: "text-gray-700 hover:bg-gray-100",
      link: "text-blue-500 underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={[
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
