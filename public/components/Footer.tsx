import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paragraph from "./common/Paragraph";
import { FOOTER_LINKS_LIST } from "@/utils/helper";
import Cta from "./common/Cta";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="bg-dark-blue pt-10 pb-12 sm:pb-15 lg:pb-20 px-5">
      <div className="max-w-285 mx-auto">
        <div className="flex justify-between items-end pb-8 md:pb-14 gap-5 max-md:flex-col">
          <div className="lg:max-w-114.5 w-full flex flex-col gap-7 md:gap-12 pb-4 md:pb-10">
            <Link href="/">
              {" "}
              <Image
                src="/assets/images/webp/footer-logo.webp"
                width={242}
                height={51}
                alt="footer-logo"
                className="max-w-43 lg:max-w-60.5 lg:h-13 w-full"
              />
            </Link>
            <div className="space-y-6">
              <Paragraph className="text-white! sm:max-w-64">
                Made for learning & making. Build anything, right in your
                browser.
              </Paragraph>
              <div className="flex gap-4 sm:gap-5 flex-wrap">
                {FOOTER_LINKS_LIST.map((obj, i) => (
                  <Link
                    className="text-yellow text-sm sm:text-base font-medium leading-none"
                    key={i}
                    href={obj.href}
                  >
                    {obj.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:max-w-102.5 w-full space-y-6">
            <Paragraph className="text-white!">
              Stay Up-to-Date with the Latest 3D Design, Circuits, and Maker
              Insights
            </Paragraph>
            <form>
              <div className="space-x-4 flex lg:flex-row max-sm:flex-wrap max-sm:gap-3">
                <input type="email" placeholder="Email" className="text-gray placeholder:text-gray text-base font-medium placeholder:font-medium py-3 px-3.5 bg-white rounded-[10px]" />
                <Cta showArrow variant="yellow" className="rounded-[10px]! px-4! text-nowrap!">
                  Sign Up
                </Cta>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-t-white"> 
            <Paragraph className="text-white!">© <span>{year}</span> Inventa. All rights reserved.
Designed by TokoTema</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Footer;
