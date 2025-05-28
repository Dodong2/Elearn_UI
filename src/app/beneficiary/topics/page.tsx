"use client"
import { useState } from "react";
import UpdatesContent from "./pages/UpdatesContent";
import FilesContent from "./pages/FilesContent";
import InstructorsContent from "./pages/InstructorsContent";
import Navbar from "@/components/Navbar";

const meeting = [
  { day: "APR 18", title: "Meeting #1", time: "10:00 – 11:30 AM" },
  { day: "NEXT", title: "Meeting #2", time: "06:00 – 07:30 PM" },
  { day: "FORT", title: "Meeting #3", time: "09:00 – 10:00 AM" },
];

export default function TopicPage() {
  const [activeTab, setActiveTab] = useState("updates");

  const renderContent = () => {
    switch (activeTab) {
      case "updates":
        return <UpdatesContent />;
      case "meeting":
        return <FilesContent />;
      case "instructors":
        return <InstructorsContent />;
      default:
        return <UpdatesContent />;
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 items-start">
        {/* Main content - LEFT SIDE */}
        <div className="bg-white rounded-md overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 rounded-t-1xl text-white p-20">
            <h2 className="text-lg font-semibold">Topic #1</h2>
          </div>

          {/* Tabs */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Dynamic Content based on active tab */}
          {renderContent()}
        </div>

        {/* Right Sidebar - Upcoming Meetings */}
        <aside className="hidden md:block bg-gray-100 rounded-md p-4">
          <h3 className="text-gray-700 font-semibold mb-4">Upcoming</h3>
          <ul className="space-y-3">
            {meeting.map((meeting, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-gray-400"></div>
                <div>
                  <p className="text-sm font-semibold">{meeting.title}</p>
                  <p className="text-xs text-gray-500">{meeting.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-xs text-gray-500 hover:underline">View all</button>
        </aside>
      </div>
    </div>
  );
}