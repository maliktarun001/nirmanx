import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
  icon: string;
  className?: string;
  pathClassName?: string;
}

const Icons: React.FC<LoginCardProps> = ({ icon, className }) => {
  const iconList = {
    menuIcon: (
      <svg viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.75"
          y1="0.75"
          x2="17.25"
          y2="0.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="12.75"
          x2="17.25"
          y2="12.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="6.75"
          y1="6.75"
          x2="17.25"
          y2="6.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    closeIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    ),
    playVideoIcon:(
       <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 64 64"
  fill="none"
>
  <path
    d="M22 14L48 30C50 31.2 50 32.8 48 34L22 50C20 51.2 18 50 18 48V16C18 14 20 12.8 22 14Z"
    stroke="currentColor"
    strokeWidth={4}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

    )
  };
  const addClassName = (
    icon: ReactElement<SVGElement>,
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)]),
  );
  return iconsNew[icon] || null;
};

export default Icons;
