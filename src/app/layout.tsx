"use client";

import 'react-quill/dist/quill.snow.css';

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Navbar from '@/components/globalbiz/homepage/navbar';
import FooterSection from '@/components/globalbiz/homepage/footer';

import { Toaster } from "@/components/ui/toaster";
import { Inter, Oswald, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-oswald",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/dashboard/admin"); 

  return (
    <SessionProvider>
      <html lang="en" className={`${raleway.variable} ${oswald.variable}`}>
        <body className={inter.className}>
          
          {/* Show navbar only if NOT admin */}
          {!isAdmin && <Navbar />}

          {children}

          <Toaster />
          
          {/* Show footer only if NOT admin */}
          {!isAdmin && <FooterSection />}

        </body>
      </html>
    </SessionProvider>
  );
}
