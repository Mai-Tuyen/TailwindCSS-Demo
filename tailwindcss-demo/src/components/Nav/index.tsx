import React from "react";
import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from "react-icons/bi";
import NavItem from "./NavItem";
import { NavItemType } from "./type";
export default function Nav() {
  const defaultIconSize = "1.875rem";
  const items: NavItemType[] = [
    { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: "Movies", icon: <BiMoviePlay size={defaultIconSize} /> },
    { label: "About", icon: <BiInfoCircle size={defaultIconSize} /> },
  ];
  return (
    <nav className="col-span-1 min-h-screen bg-cyan-200">
      <div className="mx-4 items-center justify-between">
        <h4 className="text-primary border-primary border-b py-4 text-right font-bold uppercase">
          Phimmoi.net
        </h4>
      </div>
      <ul className="mx-4 my-2">
        {items.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}
