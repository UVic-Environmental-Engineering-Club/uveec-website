import Marquee from "react-fast-marquee";
import { Logo } from "../atoms";
import { SponsorMap, SponsorMapDark } from "../../constants";
import React, { useState, useEffect} from 'react';

export const SponsorMarquee = () => {
  
  // Check the state 
  const [isDarkMode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkmode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkmode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return() => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const sponsorData = isDarkMode ? SponsorMapDark : SponsorMap;

  return (
    <Marquee direction="right" speed={80} gradient={false}>
      <div className="flex flex-row items-center justify-evenly space-x-24 space-y-4 mr-24">
        {sponsorData.map((card, i) => (
          <div
            key={i}
          >
            <Logo
              src={card.img}
              className="h-12 w-56"
              classNameImage="object-contain"
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};
