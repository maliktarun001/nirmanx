import React from "react";
import Cta from "./common/Cta";
import { PRICING_PLANS } from "@/utils/helper";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";

const PricingPlans = () => {
  return (
    <div className="py-12 sm:pt-15.5 md:pb-21.25 px-5">
      <div className="max-w-265.75 mx-auto">
        <Heading align="center" className="text-black!">
          Simple, honest pricing
        </Heading>
        <Paragraph align="center" className="text-gray! mt-2.5!">
          Start free, upgrade when you&apos;re ready.
        </Paragraph>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 sm:pt-10">
          {PRICING_PLANS.map((obj) => (
            <div
              key={obj.id}
              className={`relative rounded-xl md:rounded-3xl border p-5 md:p-8 ${
                obj.popular ? "border-blue shadow-lg" : "border-gray-200"
              }`}
            >
              {obj.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue text-white text-sm font-semibold px-5 py-1 rounded-full">
                  {obj.badge}
                </span>
              )}

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold">{obj.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">{obj.description}</p>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-3 sm:mt-6">{obj.price}</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2">{obj.duration}</p>

              <hr className="my-4 sm:my-6" />

              <ul className="space-y-4">
                {obj.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="text-success">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Cta
                variant={obj.variant as "primary" | "outline"}
                className="w-full mt-8 justify-center!"
              >
                {obj.buttonText}
              </Cta>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
