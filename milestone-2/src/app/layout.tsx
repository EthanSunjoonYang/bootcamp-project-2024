import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Yang",
  description: "A personal website for Ethan Yang.",
};
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  );
}