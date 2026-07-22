import React from "react";
interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}
const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  align,
}) => {
  return (
    <p
      className={`${className} ${align === "center" ? "text-center mx-auto" : align === "right" ? "text-right" : "text-left"} text-white/80 font-normal leading-[150%] text-sm sm:text-base`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
