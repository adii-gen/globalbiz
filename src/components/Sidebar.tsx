"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  UserPlus,
  Users,
  Menu, 
  X,
 
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard/admin" },
    { title: "Team Management", icon: UserPlus, href: "/dashboard/admin/team" },
    { title: "Address", icon:MapPin, href: "/dashboard/admin/address" },
    {title:"Blogs", icon: Users, href:"/dashboard/admin/blogs" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-blue-700 text-white rounded-xl shadow-xl hover:bg-blue-800 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue text-white transition-all duration-300 z-40 border-r border-slate-800 ${
          isOpen ? "w-72" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        {/* Logo & Header */}
        <div className="flex items-center justify-center h-16 border-b border-slate-800 px-5">
          <Image
                        src="/global/logo-navbar.png"
                        alt="Global Biz"
                        width={100}
                        height={50}
                        
                      />
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-1.5 overflow-y-auto h-[calc(100vh-12rem)] pb-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all group ${
                isActive(item.href)
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg font-medium"
                  : "hover:bg-slate-800/70"
              }`}
            >
              <item.icon
                size={20}
                className={`${
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-400 group-hover:text-yellow-400"
                } transition-colors`}
              />
              {isOpen && (
                <span className={`text-sm ${isActive(item.href) ? "font-semibold" : "font-medium"}`}>
                  {item.title}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* User Profile Footer */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-slate-800 bg-blue backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center font-bold text-white shadow-md">
                AD
              </div>
              <div>
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs text-slate-400">admin@globalbizsetup.com</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
        />
      )}
    </>
  );
};

export default Sidebar;