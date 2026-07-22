import React from "react";
interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}
const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  align,
}) => {
  return (
    <h2
      className={`${className} ${align === "center" ? "text-center mx-auto" : align === "right" ? "text-right" : "text-left"} text-white font-semibold leading-120 text-[28px] lg:text-4xl xl:custom-lg`}
    >
      {children}
    </h2>
  );
};

export default Heading;
