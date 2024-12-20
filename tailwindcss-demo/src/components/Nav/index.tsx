import React, { useState } from "react";
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import NavItem from "./NavItem";
import { NavItemType } from "./type";
export default function Nav() {
  const [oPenMenu, setoPenMenu] = useState(false);
  const defaultIconSize = "1.875rem";
  const items: NavItemType[] = [
    { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: "Movies", icon: <BiMoviePlay size={defaultIconSize} /> },
    { label: "About", icon: <BiInfoCircle size={defaultIconSize} /> },
  ];
  return (
    <nav className="col-span-1 bg-cyan-200 md:min-h-screen">
      <div className="mx-4 flex items-center justify-between md:block">
        <h4 className="text-primary border-primary border-b py-4 text-right font-bold uppercase">
          Phimmoi.net
        </h4>
        <BiMenu
          className="text-primary cursor-pointer md:hidden"
          size={defaultIconSize}
          onClick={() => setoPenMenu(!oPenMenu)}
        />
      </div>
      <ul className={`mx-4 my-2 md:block ${oPenMenu ? "block" : "hidden"}`}>
        {items.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}
