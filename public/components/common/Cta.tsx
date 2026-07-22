import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
   variant?: "primary" | "secondary" | "yellow" | "outline";
  showArrow?: boolean;
}

const Cta: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  href,
  variant = "primary",
  showArrow = false,
}) => {
  const variants = {
    primary:
      "bg-blue text-white before:bg-white hover:text-blue border-blue",
    secondary:
      "bg-white text-black-secondary before:bg-blue hover:text-white border-white hover:border-blue",
      yellow:
"bg-yellow text-black-secondary border-yellow before:bg-white hover:text-black-secondary",
outline:
"bg-transparent text-white border-white before:bg-white hover:text-blue",
  };

  const baseClasses = `
    relative inline-flex items-center gap-2
    overflow-hidden z-10 cursor-pointer
    font-semibold leading-normal
    rounded-full text-sm py-3.5 px-6
    border transition-all duration-300
    before:absolute before:inset-0 before:-translate-x-full
    before:transition-transform before:duration-300
    before:content-[''] hover:before:translate-x-0
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          )}
        </span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default Cta;