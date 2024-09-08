import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "./ui";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[46vw]">
          Ready to take <span className="text-purple"> your </span> digital
          presence to the next level ?
        </h1>
        <p className="text-center md:mt-10 mt-6">
          Reach out to me today and let's discuss how i can help you achieve
          your goals
        </p>
        <a href="/">
          <MagicButton
            title="let't get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div
        className={
          "flex mt-15 flex-col justify-between items-center md:flex-row"
        }
      >
        <p className="md:text-base text-sm md:font-normal font-light">
          copyright ⓒ 2024 Omran Alrbedan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className={
                "w-10 h-10 cursor-pointer mb-[100px] flex justify-center items-center backdrop:filter backdrop:blur-lg saturate-180 bg-opacity-65 bg-black-200 rounded-lg border border-black-200"
              }
            >
              <img
                src={profile.img}
                alt={String(profile.id)}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
