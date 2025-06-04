import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaAngleRight,
} from "react-icons/fa";

export const HeroBanner = () => {
  return (
    <div className="flex flex-col relative items-center h-[500px] md:h-[600px] w-full">
      <div className="relative h-full w-full">
        <Image
          layout="fill"
          src="/images/hero2.jpg"
          className="object-cover"
          alt={""}
          decoding="async"
          priority
        />
        <div className="bg-black h-full w-full opacity-60" />
      </div>
      <div className="absolute top-14 md:top-24 w-full md:w-[800px]">
        <h1 className="text-slate-50 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center mb-3">
          Preserving the environment one project at a time
        </h1>
        <p className="mt-6 text-lg text-slate-50 text-center max-w-3xl mx-auto mb-5">
          Our organization&apos;s primary purpose is to create out of the box
          engineering solutions to everyday environmental problems in the local
          Capital Regional District of Victoria, British Columbia.
        </p>
        <div className="flex flex-row justify-evenly">
          <Link legacyBehavior href="/projects" passHref>
            <a className=" flex flex-row items-center hover:cursor-pointer">
              <p className="text-orange font-bold">Learn more</p>
              <FaAngleRight className="h-5 w-5 fill-orange" />
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className=" flex flex-row items-center hover:cursor-pointer">
              <p className="text-slate-50">Contact us</p>
              <FaAngleRight className="h-5 w-5 fill-slate-50" />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-lightBlue text-slate-50 text-lg h-11 w-full py-2">
        Find us on&nbsp;
        <Link legacyBehavior href="https://www.instagram.com/uvicenvironment/?hl=en" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;
        <Link
        legacyBehavior
          href="https://www.linkedin.com/company/university-of-victoria-environmental-engineering-club-uveec/"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;
        <Link
        legacyBehavior
          href="https://github.com/UVic-Environmental-Engineering-Club"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;and&nbsp;
        <Link legacyBehavior href="https://discord.gg/SF6sRAQEuv" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <FaDiscord className="h-6 w-6 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
      </div>
    </div>
  );
};
