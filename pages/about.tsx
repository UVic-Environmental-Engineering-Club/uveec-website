import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import Image from "next/image";
import { ProfileCard } from "../src/components/molecules";
import { SubteamMap, TeamMap } from "../src/constants";

const About: NextPage = () => {
  return (
    <BaseLayout>
      <section id="about">
        <div className="relative h-80 md:h-52 w-full">
          <Image
            layout="fill"
            src="/images/header3.jpg"
            className="object-cover blur-sm"
            alt={""}
          />
          <div className="absolute bg-black h-full w-full opacity-50" />

          <div className="relative text-lg text-slate-50 max-w-3xl mx-auto py-7 md:py-10 px-5 md:p-0 text-center">
            The UVic Environmental Engineering Club gives students a chance to
            develop their technical and networking skills through hands on
            learning, skill development workshops, and engineering conference
            events. Joining our team&apos;s administration is a great
            opportunity for those looking to take their project management and
            leadership skills to the next level.
          </div>
        </div>
      </section>

      {/* <h1 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 text-center">
        Team Structure
      </h1>
      <div className="flex justify-center">
        <Image
          height={500}
          width={850}
          src={"/images/team_structure.png"}
          alt={""}
        />
      </div>

      <section className="my-16" id="subteams">
        <div className="relative bg-slate-100 h-[785px] md:h-56 w-full">
          <div className="grid md:gap-8 lg:grid-cols-4 md:grid-cols-2 justify-items-center mx-auto px-4">
            {SubteamMap.map((card, i) => (
              <div className="flex flex-col pt-4 items-center" key={i}>
                <Image height={50} width={50} src={card.img} alt={""} key={i} />
                <h1 className="dark:text-royalBlue" key={i}>
                  {card.name}
                </h1>
                <div
                  className="text-slate-400 mt-0.5 text-sm leading-6 text-center"
                  key={i}
                >
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 text-center">
        Team Leadership
      </h2>
      
      <div className="grid md:gap-8 lg:grid-cols-3 md:grid-cols-2 justify-items-center mx-auto pb-5 pt-3 px-6">
        {TeamMap.map((card, i) => (
          //<ProfileCard name={card.name} position={card.position} key={i} />
          <ProfileCard name={card.name} position={card.position} img={card.img} key={i} />
        ))}
      </div>

      


    </BaseLayout>
  );
};

export default About;
