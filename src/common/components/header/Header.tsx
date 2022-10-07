import React from "react";

import Link from "next/link";

import { images } from '../../../constants';

function Header() {
  return (
    <nav className="p-4 bg-royal-blue fixed w-full">
      <div>
          <span className= "cursor-pointer">
            <img className="h-logo" src = {images.navbarLogo3.src} />
          </span>
      </div>
    </nav>
  )
}

export default Header;
