import { CHOOSE_YOUR_PATH } from "@/utils/helper";
import React from "react";
import Icons from "./common/Icons";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";

const ChooseYourPath = () => {
  return (
    <div className="py-20 px-5 bg-off-white">
      <div className="max-w-280 mx-auto relative">
        {" "}
        <div className="size-57.75 rounded-full bg-dark-blue blur-[200px] absolute right-0 top-0 pointer-events-none"></div>{" "}
        <div className="size-57.75 rounded-full bg-yellow blur-[200px] absolute left-0 bottom-0 pointer-events-none"></div>{" "}
        <Heading align="center" className="text-black!">
          Choose your path
        </Heading>
        <Paragraph
          className="text-base lg:text-lg! text-gray! mt-2.5"
          align="center"
        >
          Pick how you want to get started. We&apos;ll tailor your experience.
        </Paragraph>
        <div className="grid min-[576px]:grid-cols-2 md:grid-cols-3 gap-6 mt-9 relative">
          {CHOOSE_YOUR_PATH.map((obj) => (
            <div key={obj.id} className="bg-white rounded-2xl p-4 lg:px-6 lg:py-8">
              <Icons icon={obj.icon} />

              <h3 className={`text-lg lg:text-2xl font-bold mt-5 ${obj.id === 2 ? "text-blue" : obj.id === 3 ? "text-yellow" : "text-success"}`}>
                {obj.title}
              </h3>

              <p className="text-black font-bold text-sm lg:text-base leading-normal mt-1 lg:mt-3">
                {obj.subtitle}
              </p>

              <ul className="mt-3 lg:mt-6 space-y-3 list-disc pl-5 text-sm lg:text-base font-medium">
                {obj.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <button className="mt-3 lg:mt-6 flex items-center gap-2 text-base lg:text-lg font-bold text-blue hover:gap-3 cursor-pointer hover:text-yellow transition-all duration-300">
                {obj.buttonText}
                <Icons icon="arrowRight" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPath;
