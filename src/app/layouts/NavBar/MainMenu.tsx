import React from "react";
import Link from "next/link";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiCamera,
  HiOutlineX,
  HiBriefcase, 
  HiLightningBolt,
  HiUser,
} from "react-icons/hi";

export const navData = [
  { title: "About", href: "#about", icon: HiUser },
  { title: "Projects", href: "#projects", icon: HiBeaker },
  { title: "Experiences", href: "#experiences", icon: HiBriefcase },
  { title: "Hackathons", href: "#hackathons", icon: HiLightningBolt },
];

export default function MainMenu() {

  return (
    <div className="hidden sm:flex gap-1">
      {navData.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="relative group px-2 py-1 lg:text-sm text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <link.icon className="mr-[5px] lg:text-[18px] text-[14px] inline-flex" />
          <span className="relative z-10">{link.title}</span>
          
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Animated underline */}
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
        </Link>
      ))}
    </div>
  );
}
