import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-24 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[35rem] h-[40rem] sm:h-[41rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="flex items-center justify-center relative sm:w-[570px] w-[80vw] h-[40vh] sm:h-[20vh] overflow-hidden lg:h-[35vh]">
                <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={"/bg.png"} alt="title" fill />
                </div>
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold md:text-xl lg:text-2xl text-base line-clamp-1 mt-5">
                {title}
              </h1>
              <p className="lg:font-light mt-2 font-light lg:text-base text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex justify-between items-center my-3 mt-5">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:h-12 lg:w-12 h-10 w-10 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center ">
                  <p className="flex   text-base text-purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
