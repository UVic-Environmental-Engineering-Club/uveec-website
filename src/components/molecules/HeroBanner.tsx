import Image from "next/image";
import Link from "next/link";
import { medium_lorem, short_lorem } from "../../constants";
import { CTAButton } from "../atoms";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaSlack,
  FaAngleRight,
} from "react-icons/fa";

export const HeroBanner = () => {
  return (
    <div className="flex flex-col relative items-center h-96 md:h-[660px] w-full">
      <div className="relative h-full w-full">
        <Image layout="fill" src="/images/hero2.jpg" />
        <div className="bg-black h-full w-full opacity-60" />
      </div>
      <div className="absolute top-10 w-96 md:w-[800px]">
        <h1 className="text-slate-50 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center mb-3">
          {short_lorem}
        </h1>
        <p className="mt-6 text-lg text-slate-50 text-center max-w-3xl mx-auto mb-5">
          {medium_lorem}
        </p>
        <div className="flex flex-row justify-evenly">
          <div className=" flex flex-row items-center">
            <p className="text-orange font-bold">Learn more</p>
            <FaAngleRight className="h-5 w-5 fill-orange" />
          </div>
          <div className=" flex flex-row items-center">
            <p className="text-white">Contact us</p>
            <FaAngleRight className="h-5 w-5 fill-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-lightBlue text-white text-lg h-11 w-full py-2">
        Find us on&nbsp;
        <Link href="https://www.instagram.com/uvicenvironment/?hl=en" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 fill-white hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;
        <Link
          href="https://www.linkedin.com/company/university-of-victoria-environmental-engineering-club-uveec/"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 fill-white hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;
        <Link
          href="https://github.com/UVic-Environmental-Engineering-Club"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 fill-white hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
        ,&nbsp;
        <Link href="https://uvicenvironment.slack.com" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <FaSlack className="h-6 w-6 fill-white hover:fill-orange hover:cursor-pointer" />
          </a>
        </Link>
      </div>
    </div>
  );
};