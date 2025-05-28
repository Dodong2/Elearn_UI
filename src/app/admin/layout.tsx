/* components */
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
/* icons */
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

export default function AdminLayout({children}: { children: React.ReactNode;}) {

  const sidebarItems = [
    { href: "/admin", icon: <FaChartBar />, text: "Dashboard" },
    { href: "/admin/usermanage", icon: <FaUsers />, text: "User management" },
    { href: "/admin/programs", icon: <FaUsers />, text: "Program management" },
    { href: "/admin/activities", icon: <FaClipboardList />, text: "Activity logs" },
    { href: "/admin/notifications", icon: <IoNotifications />, text: "Notification" },
    {
      href: "/admin",
      icon: <MdOutlineFeedback />,
      text: "Feedback Management",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="flex flex-1 relative">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 md:ml-60 p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
