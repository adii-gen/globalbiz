import 'react-quill/dist/quill.snow.css';

import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter, Oswald, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/globalbiz/homepage/navbar';
import FooterSection from '@/components/globalbiz/homepage/footer';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Document Management System",
  description: "We're here to Increase your Productivity",
};
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500","400"],     // you only want 500
  variable: "--font-oswald",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
<html lang="en" className={`${raleway.variable} ${oswald.variable}`}>
        <body className={inter.className}>
          <Navbar />
            {children} <Toaster />
            <FooterSection/>
        </body>
      </html>
    </SessionProvider>
  );
}
