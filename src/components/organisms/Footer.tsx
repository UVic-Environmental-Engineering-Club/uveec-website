import Image from "next/image";
import Link from "next/link";
import { CompanyName } from "../../constants";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-baseline h-[700px] md:h-72 w-full space-y-7 md:space-y-16 bg-royalBlue ">
        <Link legacyBehavior href="/" passHref>
          <a className="relative h-16 w-36 mb-20 top-16 hover:cursor-pointer">
            <Image
              layout="fill"
              src="/images/favicon.png"
              alt={""}
              decoding="async"
              priority
            />
          </a>
        </Link>
        <div className="space-y-2 flex flex-col text-center md:text-start">
          <h2 className="text-slate-50 font-bold mb-4">Project</h2>
          <Link legacyBehavior href="/projects/#usv" passHref>
            <a className="text-slate-50 hover:text-orange hover:cursor-pointer">
              Unmanned Surface Vehicle
            </a>
          </Link>
          <Link
          legacyBehavior
            //href="/_error"
            href="/projects/#aug"
            passHref
          >
            <a className="text-slate-50 hover:text-orange hover:cursor-pointer">
              Autonomous Underwater Glider
            </a>
          </Link>
          
        </div>

        <div className="space-y-2 flex flex-col text-center md:text-start">
          <h2 className="text-slate-50 font-bold mb-4">Information</h2>
          <Link legacyBehavior href="http://web.uvic.ca/~valeo/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-orange hover:cursor-pointer"
            >
              Faculty Supervisor
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-baseline">
          <p className="text-slate-50 font-bold">
            Get the latest updates from UVEEC
          </p>
          <div className="flex flex-row items-center md:items-baseline -space-x-1">
            <Link
            legacyBehavior
              href="https://www.instagram.com/uvicenvironment/?hl=en"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-11 w-11 p-2 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link
            legacyBehavior
              href="https://www.linkedin.com/company/university-of-victoria-environmental-engineering-club-uveec/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-11 w-11 p-2 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link
            legacyBehavior
              href="https://github.com/UVic-Environmental-Engineering-Club"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-11 w-11 p-2 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
            <Link legacyBehavior href="https://discord.gg/SF6sRAQEuv" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FaDiscord className="h-11 w-11 p-2 fill-slate-50 hover:fill-orange hover:cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20 md:h-14 w-full p-4 bg-[#102543]">
        <p className="text-xs text-center text-slate-50">
          Copyright © {currentYear} {CompanyName}.
        </p>
        <p className="text-xs text-center text-slate-50">
          Designed in Victoria, British Columbia
        </p>
      </div>
    </div>
  );
};
