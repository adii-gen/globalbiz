"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileText, 
  Settings, 
  BarChart3, 
  Menu, 
  X,
  ChevronDown,
  UserPlus,
  Briefcase,
  Globe,
  MessageSquare
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { title: "Team Management", icon: UserPlus, href: "/admin/team" },
    { title: "Address", icon: Users, href: "/admin/address" },
    {
      title: "Company Formation",
      icon: Building2,
      submenu: [
        { title: "All Applications", href: "/admin/applications" },
        { title: "Free Zone", href: "/admin/applications/freezone" },
        { title: "Mainland", href: "/admin/applications/mainland" },
        { title: "Offshore", href: "/admin/applications/offshore" },
        { title: "By Emirate", href: "/admin/applications/emirates" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      submenu: [
        { title: "All Services", href: "/admin/services" },
        { title: "Business Setup", href: "/admin/services/setup" },
        { title: "License Renewal", href: "/admin/services/renewal" },
        { title: "Visa Services", href: "/admin/services/visa" },
        { title: "PRO Services", href: "/admin/services/pro" },
        { title: "Compliance", href: "/admin/services/compliance" }
      ]
    },
    {
      title: "Documents",
      icon: FileText,
      submenu: [
        { title: "All Documents", href: "/admin/documents" },
        { title: "Pending Review", href: "/admin/documents/pending" },
        { title: "Approved", href: "/admin/documents/approved" },
        { title: "Templates", href: "/admin/documents/templates" }
      ]
    },
    {
      title: "Communications",
      icon: MessageSquare,
      submenu: [
        { title: "Messages", href: "/admin/messages" },
        { title: "Email Campaigns", href: "/admin/emails" },
        { title: "SMS Notifications", href: "/admin/sms" }
      ]
    },
    {
      title: "Reports & Analytics",
      icon: BarChart3,
      submenu: [
        { title: "Overview", href: "/admin/reports" },
        { title: "Revenue Reports", href: "/admin/reports/revenue" },
        { title: "Client Reports", href: "/admin/reports/clients" },
        { title: "Service Reports", href: "/admin/reports/services" }
      ]
    },
    {
      title: "Website Content",
      icon: Globe,
      submenu: [
        { title: "Pages", href: "/admin/content/pages" },
        { title: "Blog Posts", href: "/admin/content/blog" },
        { title: "Testimonials", href: "/admin/content/testimonials" },
        { title: "FAQs", href: "/admin/content/faqs" }
      ]
    },
    {
      title: "Settings",
      icon: Settings,
      submenu: [
        { title: "General", href: "/admin/settings/general" },
        { title: "Team & Users", href: "/admin/settings/users" },
        { title: "Pricing", href: "/admin/settings/pricing" },
        { title: "Integrations", href: "/admin/settings/integrations" },
        { title: "Email Templates", href: "/admin/settings/email-templates" }
      ]
    },
  ];

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

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
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-slate-950 to-slate-900 text-white transition-all duration-300 z-40 border-r border-slate-800 ${
          isOpen ? "w-72" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        {/* Logo & Header */}
        <div className="flex items-center justify-center h-16 border-b border-slate-800 px-5">
          <div className={`flex items-center gap-3 ${!isOpen && "lg:justify-center"}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
              GB
            </div>
            {isOpen && (
              <div>
                <div className="font-bold text-xl tracking-tight">Global Biz</div>
                <div className="text-xs text-slate-400">Admin Panel</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-1.5 overflow-y-auto h-[calc(100vh-12rem)] pb-6">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                      openSubmenu === index
                        ? "bg-blue-600/20 text-blue-400"
                        : "hover:bg-slate-800/70"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <item.icon size={20} className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
                      {isOpen && <span className="font-medium text-sm">{item.title}</span>}
                    </div>
                    {isOpen && (
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform ${
                          openSubmenu === index ? "rotate-180 text-yellow-400" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {isOpen && openSubmenu === index && (
                    <div className="ml-12 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${
                            isActive(subItem.href)
                              ? "bg-blue-600 text-white font-medium shadow-md"
                              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
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
              )}
            </div>
          ))}
        </nav>

        {/* User Profile Footer */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-slate-800 bg-slate-950/80 backdrop-blur">
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