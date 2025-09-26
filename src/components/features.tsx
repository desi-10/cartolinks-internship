import React from "react";
import FeatureCard from "./common/feature-card";
import { features } from "@/data/features";
import { ChevronDown } from "lucide-react";

const Features = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Generate</h2>
        <button className="flex items-center space-x-2 text-blue-500 text-sm cursor-pointer">
          <ChevronDown />
          <span>Show all</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            isNew={feature.isNew}
            description={feature.description}
            icon={feature.icon}
            iconBg={feature.iconBg}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
