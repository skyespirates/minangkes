"use client";

import { useState } from "react";
import { BiMenu, BiUserCircle, BiX } from "react-icons/bi";
import ListItem from "./ListItem";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    icon: <BiMenu />,
    text: "Tentang",
    target: "/tentang",
  },
  {
    icon: <BiMenu />,
    text: "Katalog Obat",
    target: "/obatan",
  },
  {
    icon: <BiMenu />,
    text: "Katalog Alat Kesehatan",
    target: "/alat",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);
  return (
    <>
      {/* navbar */}
      <div className="p-4 flex justify-between items-center border-2 bg-lime-600">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="border rounded-md text-3xl p-1 bg-white"
          >
            <BiMenu />
          </button>
          <Link
            href="/"
            className="flex items-center font-bold bg-white rounded pr-4"
          >
            <Image src="/logo_.png" alt="logo" width={72} height={72} />
            <p className="text-3xl">APOTEK MINANGKES</p>
          </Link>
        </div>
        <Link href="/login" className="text-3xl bg-white rounded-full">
          <BiUserCircle />
        </Link>
      </div>

      {/* sidebar */}
      <div
        className={`absolute top-0 min-h-screen  w-80 rounded-r-xl p-4 bg-lime-600 easy-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[320px]"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="bg-white rounded-md">
            <Image src="/logo_.png" alt="logo" width={72} height={72} />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-600  rounded-md p-1 hover:bg-gray-200"
          >
            <BiX />
          </button>
        </div>
        <ul className="h-full w-full text-xl flex flex-col">
          {links.map((link, i) => (
            <ListItem
              handleClick={handleClick}
              icon={link.icon}
              text={link.text}
              target={link.target}
              key={i}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
