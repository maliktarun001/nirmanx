'use client'
import { NAV_LINKS } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Cta from "./Cta";
import Icons from "./Icons";
import {useState } from "react";

const Header = () => {
  const [nav, setNav]= useState(false)
  useEffect(()=>{
if(nav){
  document.body.style.overflow ="hidden"
} else{
  document.body.style.overflow="auto"
}
return()=>{
  document.body.style.overflow="auto"
}
  },[nav])
  return (
    <div className="bg-white px-4 py-2 lg:p-[10px_9px_12px_37px] max-w-322.5 mx-auto rounded-full w-full">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            width={127}
            height={46}
            src="/assets/images/webp/logo.webp"
            alt="logo"
            className="w-full max-w-24 lg:max-w-31.75 lg:h-11.5 object-contain"
          />
        </Link>
        <div className={`${nav ? "left-0" : "-left-full"} flex gap-8 lg:flex-row flex-col items-center justify-center max-lg:fixed max-lg:top-0 max-lg:min-h-screen max-lg:w-full max-lg:h-full max-lg:z-50 max-lg:bg-white transition-all duration-300`}>
          {NAV_LINKS.map((obj,i) => (
            <div key={i}>
              <Link onClick={()=>setNav(!nav)}
                href={obj.link}
                className="text-lg lg:text-base font-bold text-text-primary relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {obj.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-10 items-center">
<div className="gap-10 items-center hidden lg:flex"><Link href="/sign-in" className="cursor-pointer font-bold text-blue text-base leading-normal bg-transparent py-2 px-3 lg:flex hidden">Sign In</Link>
          <Cta>Get Started</Cta></div>
           <button
              onClick={() => setNav(!nav)}
              className="lg:hidden w-10.75 h-8 bg-blue relative cursor-pointer text-white flex justify-center items-center rounded-[10px] stash-token-icon-box before:bg-[linear-gradient(90deg,#5328FF_0%,rgba(83,40,255,0)_5.06%)]! before:rounded-[10px]! transition-all duration-300 z-51"
            >
              <Icons
                icon={nav ? "closeIcon" : "menuIcon"}
                className={nav ? "size-6" : "size-5"}
              />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
