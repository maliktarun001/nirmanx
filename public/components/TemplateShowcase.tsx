"use client";
import Image from "next/image";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Cta from "./common/Cta";
import Icons from "./common/Icons";
import { useState } from "react";


const categories = [
  { name: "All", active: true },
  { name: "Beginner", active: false },
  { name: "Classroom", active: false },
  { name: "Electronics", active: false },
  { name: "3D", active: false },
  { name: "Projects", active: false },
  { name: "Trending", active: false },
];

type Template = {
  id: string;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  duration: string;
};

const templates: Template[] = [];

const TemplateShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);
  return (
    <div className="bg-success py-15 sm:py-20 lg:py-25 px-5">
      <div className="max-w-308 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <Heading align="center" className="text-white mb-3">
            Start with templates, not a blank canvas.
          </Heading>
          <Paragraph align="center" className="text-white/90">
            Jump into curated projects and customize them to make them your own.
          </Paragraph>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              onClick={() => setSelectedCategory(category.name)}
              key={category.name}
              className={`px-5 py-2.5 cursor-pointer rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.name
                  ? "bg-yellow text-text-primary shadow-md"
                  : "bg-white text-black hover:bg-yellow"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="w-full p-1 flex items-center justify-center">
                <Image
                  src={template.image}
                  alt="images"
                  width={285}
                  height={211}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4">
                <p
                  className={`text-xs font-semibold mb-1.5 ${template.categoryColor}`}
                >
                  {template.category}
                </p>
                <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-blue transition-colors">
                  {template.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray text-xs">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  <span>{template.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Cta variant="secondary" showArrow>
            Browse All Templates
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default TemplateShowcase;


