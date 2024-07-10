import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/common/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Adarsh - Tech versatile",
  description: "I am a tech versatile, I love to code and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ThemeProvider>
      <body className={`${inter.className}`}>{children}</body>
    </ThemeProvider>
    </html>
  );
}
