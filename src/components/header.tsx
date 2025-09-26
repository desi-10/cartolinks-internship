"use client";

import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { IoMoon, IoNotifications, IoVideocam } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { RiCompasses2Fill, RiImageAiFill } from "react-icons/ri";
import { ImMagicWand } from "react-icons/im";
import { TbWritingSign } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdSunny } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { motion } from "framer-motion";
import { DropdownMenuDemo } from "./drop-down";
import { TeamSwitcher } from "./switcher";

const navItems = [
  { id: "home", icon: <GoHomeFill size={20} /> },
  { id: "image", icon: <BsImage size={20} /> },
  { id: "video", icon: <IoVideocam size={20} /> },
  { id: "magic", icon: <ImMagicWand size={20} /> },
  { id: "writing", icon: <TbWritingSign size={20} /> },
  { id: "compass", icon: <RiCompasses2Fill size={20} /> },
  { id: "folder", icon: <FaFolder size={20} /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white/50 dark:bg-gray-900/60 backdrop-blur-lg border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between md:px-8">
        {/* Left: Logo + Username */}
        <div className="flex items-center gap-x-4">
          <div
            className={`${
              theme === "dark" ? "w-10 h-10 m-5" : "w-20 h-20"
            } flex items-center justify-center text-white dark:text-black font-bold`}
          >
            {theme === "dark" ? (
              <img src="./logo2.png" alt="" />
            ) : (
              <img
                src={theme === "dark" ? "./logo2.png" : "./logo.png"}
                alt=""
              />
            )}
          </div>
          <span className="hidden font-medium text-gray-500 dark:text-gray-200 lg:flex items-center lg:space-x-2">
            <span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" />
            </span>

            <TeamSwitcher />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-3xl">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative cursor-pointer p-2 rounded-2xl"
            >
              {active === item.id && (
                <motion.div
                  layoutId="activeNav" // shared id for smooth transition
                  className="absolute inset-0 bg-white rounded-2xl shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div
                className={`relative z-10 py-1 px-3 ${
                  active === item.id ? "dark:text-black" : ""
                }`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm flex items-center space-x-2">
            <span>
              <RiImageAiFill size={20} />
            </span>
            <p>Gallery</p>
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm flex items-center space-x-2">
            <span>
              <BiSupport size={20} />
            </span>
            <p>Support</p>
          </button>

          <IoNotifications
            size={20}
            className="text-gray-700 dark:text-gray-200"
          />

          {/* Dark Mode Toggle */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <MdSunny size={20} /> : <IoMoon size={20} />}
          </button>

          {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" /> */}
          <DropdownMenuDemo />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden shadow-md px-4 py-3 space-y-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="md:hidden flex justify-between px-4 gap-4 text-gray-600 dark:text-gray-300">
            <GoHomeFill size={20} />
            <BsImage size={20} />
            <IoVideocam size={20} />
            <ImMagicWand size={20} />
            <TbWritingSign size={20} />
            <RiCompasses2Fill size={20} />
            <FaFolder size={20} />
          </div>
          <div className="flex flex-wrap gap-x-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm">
            <button className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg">
              Gallery
            </button>
            <button className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg">
              Support
            </button>
            <div className="flex items-center gap-x-6 pt-2">
              <button>
                <IoNotifications
                  size={20}
                  className="text-gray-700 dark:text-gray-200"
                />
              </button>

              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-300" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
