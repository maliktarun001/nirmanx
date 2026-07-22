import ChooseYourPath from "@/public/components/ChooseYourPath";
import ExploreTemplets from "@/public/components/ExploreTemplets";
import Hero from "@/public/components/Hero";
import LearningPlatform from "@/public/components/LearningPlatform";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <LearningPlatform/>
     <ChooseYourPath/>
     <ExploreTemplets/>
    </div>
  );
}
