"use client";
/* hooks */
import { useState } from "react";
/* links */
import Link from "next/link";

interface TabsProps {
  href: string;
  title: string;
}

const tabs: TabsProps[] = [
  { title: "Updates", href: "/topic/updates" },
  { title: "Meeting", href: "/topic/meeting" },
  { title: "Intructors", href: "/topic/intructor" },
];


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Updates");
  return (
    <div className="bg-gray-100 flex justify-around text-sm font-medium rounded-b-sm">
      {tabs.map((tab, index) => (
        <Link key={index} href={tab.href}>
        <button
          onClick={() => setActiveTab(tab.title)}
          className={`py-2 px-4 relative transition-colors duration-200 cursor-pointer ${
            activeTab === tab.title ? "text-black" : "text-gray-700 hover:text-black"
          }`}
        >
          {tab.title}
          {activeTab === tab.title && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
          )}
        </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
