import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string; // optional URL
}

const Cta: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  href,
}) => {
  const baseClasses = `
    relative overflow-hidden z-10 cursor-pointer font-barlow font-semibold text-white leading-normal bg-blue rounded-xl text-sm py-2.5 sm:py-3.5 px-5 transition-shadow duration-500 hover:shadow-[0px_0px_40px_4px_rgba(201,168,92,0.7)] before:absolute before:inset-0 before:bg-white before:-translate-x-full before:z-0 before:transition-all before:duration-300 hover:before:translate-x-0 before:content-[''] before:w-full before:h-full hover:text-blue!
    ${className}
  `;

  // If href exists, render Link
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  // Otherwise render button
  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Cta;
