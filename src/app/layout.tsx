import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Website",
  description: "a website for travellers",
};

const poppins = Poppins({weight:["400", "500", "600", "700"], subsets: ["latin"] })
const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
