import React from "react";
import { NavItemType } from "./type";

export default function NavItem({ item }: { item: NavItemType }) {
  return (
    <div>
      <li
        className={
          "flex cursor-pointer items-center justify-end p-2" +
          (item.active ? " bg-primary text-white" : "")
        }
      >
        <h3 className="mr-2">{item.label}</h3>
        {item.icon}
      </li>
    </div>
  );
}
