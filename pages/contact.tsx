import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { ContactsMap } from "../src/constants";
import Image from "next/image";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <BaseLayout>
      <div className="px-8 md:px-0 flex flex-col justify-center text-center items-center mx-auto py-10 w-full md:w-[600px] relative ">
        <h1 className="text-4xl">Join our community.</h1>
        <p className="py-8">
          Get involved with UVEEC&apos;s community to meet our team and hear
          about future product announcements
        </p>
      </div>

      <div className="mx-auto relative grid lg:grid-cols-3 justify-items-center">
        {ContactsMap.map((contact, i) => (
          <div key={i}>
            <div className="w-full h-64 lg:h-64 lg:w-96 relative">
              <Image
                src={contact.img}
                layout="fill"
                objectFit="contain"
                alt={""}
              />
            </div>
            <div className="flex flex-col items-center py-4">
              <h1 className="py-2 text-3xl font-bold">{contact.title}</h1>
              <p className="pb-7">{contact.passage}</p>
            </div>
            <div className="flex justify-center w-full pb-14 text-center">
              <Link legacyBehavior href={`${contact.link}`} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="block bg-blue-600 text-lg font-medium rounded-2xl text-slate-50 w-80 py-4 cursor-pointer">
                    {contact.button}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
};

export default Contact;
