import ChooseYourPath from "@/public/components/ChooseYourPath";
import ExploreTemplets from "@/public/components/ExploreTemplets";
import Footer from "@/public/components/Footer";
import Hero from "@/public/components/Hero";
import LearningPlatform from "@/public/components/LearningPlatform";
import TrustedEducators from "@/public/components/TrustedEducators";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <LearningPlatform/>
     <ChooseYourPath/>
     <ExploreTemplets/>
     <TrustedEducators/>
     <Footer/>
    </div>
  );
}
