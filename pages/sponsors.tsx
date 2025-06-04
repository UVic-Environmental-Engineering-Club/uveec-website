import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";
import { SponsorMap, SponsorMapDark } from "../src/constants";
import Link from "next/link";

const Sponsors: NextPage = () => {
  return (
    <BaseLayout>
      <div className="grid md:gap-8 lg:grid-cols-3 md:grid-cols-2 justify-items-center mx-auto px-6 dark:hidden">
        {SponsorMap.map((card, i) => (
          <div
            className="w-full h-64 lg:h-64 lg:w-96 relative hover:cursor-pointer overflow-hidden group"
            key={i}
          >
            <Link legacyBehavior href={card.link} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="group-hover:blur-md transition-all duration-100 ease-out"
                />
                <div className="inset-0 flex justify-center items-center absolute p-5 opacity-0 scale-110 bg-black/40 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                  <h3 className="text-slate-50 text-center text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="md:gap-8 lg:grid-cols-3 md:grid-cols-2 justify-items-center mx-auto px-6 hidden dark:grid">
        {SponsorMapDark.map((card, i) => (
          <div
            className="w-full h-64 lg:h-64 lg:w-96 relative hover:cursor-pointer overflow-hidden group"
            key={i}
          >
            <Link legacyBehavior href={card.link} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="group-hover:blur-md transition-all duration-100 ease-out"
                />
                <div className="inset-0 flex justify-center items-center absolute p-5 opacity-0 scale-110 bg-black/40 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                  <h3 className="text-slate-50 text-center text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
};

export default Sponsors;
