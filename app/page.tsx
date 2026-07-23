import ChooseYourPath from "@/public/components/ChooseYourPath";
import ExploreTemplets from "@/public/components/ExploreTemplets";
import Footer from "@/public/components/Footer";
import FrequentlyAskedQuestions from "@/public/components/FrequentlyAskedQuestions";
import Hero from "@/public/components/Hero";
import LearningPlatform from "@/public/components/LearningPlatform";
import PricingPlans from "@/public/components/PricingPlans";
import TrustedEducators from "@/public/components/TrustedEducators";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <LearningPlatform/>
     <ChooseYourPath/>
     <ExploreTemplets/>
     <PricingPlans/>
     <FrequentlyAskedQuestions/>
     <TrustedEducators/>
     <Footer/>
    </div>
  );
}
