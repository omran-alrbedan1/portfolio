import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple"> work experience</span>
      </h1>
      <div className="grid lg:grid-cols-4  sm:grid-cols-1 gap-10 mt-12 w-full">
        {workExperience.map((card) => (
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex flex-1 text-white border-neutral-100 dark:border-slate-900"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-6 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 text-start mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
