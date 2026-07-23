import React from "react";
import Heading from "./common/Heading";
import { TESTIMONIALS_CARDS_LIST, TRUSTED_COMPANIES_LOGO } from "@/utils/helper";
import Image from "next/image";
import Icons from "./common/Icons";

const TrustedEducators = () => {
  return (
    <div className="py-12 sm:py-15 lg:py-20 xl:py-25 px-5">
      <div className="max-w-322 mx-auto space-y-13">
        <div className="space-y-10">
          <Heading align="center" className="text-black!">
            Trusted by educators, makers, and teams
          </Heading>
          <div className="flex items-center justify-center gap-9 flex-wrap">
            {TRUSTED_COMPANIES_LOGO.map((obj, i) => (
              <Image
                key={i}
                width={164}
                height={35}
                src={obj}
                alt="logo"
                className={`${
                  i === 1
                    ? "max-w-28 sm:max-w-32 md:max-w-36 lg:max-w-41"
                    : i === 2
                      ? "max-w-26 sm:max-w-30 md:max-w-34 lg:max-w-38.5"
                      : i === 3
                        ? "max-w-12 sm:max-w-14 md:max-w-16 lg:max-w-17"
                        : i === 4
                          ? "max-w-28 sm:max-w-32 md:max-w-36 lg:max-w-38.75"
                          : i === 5
                            ? "max-w-16 sm:max-w-18 md:max-w-20 lg:max-w-22"
                            : "max-w-20 sm:max-w-24 md:max-w-26 lg:max-w-27.5"
                } w-full h-auto`}
              />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
  {TESTIMONIALS_CARDS_LIST.map((item) => (
    <div
      key={item.id}
      className="bg-white/20 border-2 border-off-gray rounded-3xl p-4 sm:p-6 lg:px-7 lg:py-10 transition-shadow duration-300 hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
    >
      <div className="flex gap-5 items-start max-[992px]:flex-col h-full justify-between">
        <Image
          src={item.image}
          alt={item.name}
          width={106}
          height={106}
          className="rounded-full size-20 lg:size-26.5"
        />

        <div>
          <div className="flex gap-1 mb-3">
           <Icons icon={item.ratingIcon}/>
          </div>

          <p className="text-slate font-medium text-sm leading-normal">&quot;{item.review}&quot;</p>

          <h4 className="font-bold text-black mt-4">{item.name}</h4>

          <p className="text-sm text-gray-500">{item.designation}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default TrustedEducators;
