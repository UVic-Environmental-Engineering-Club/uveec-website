import Link from "next/link";
import Image from "next/image";
import { NavBar } from "../molecules";
import { Menu } from "../molecules";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between h-16 w-full px-4 py-2 shadow-2xl bg-royalBlue">
      <Link legacyBehavior href="/" passHref>
        <a className="relative h-10 w-28 hover:cursor-pointer">
          <Image
            layout="fill"
            src="/images/uveec.png"
            alt={""}
            decoding="async"
            priority
          />
        </a>
      </Link>
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};
