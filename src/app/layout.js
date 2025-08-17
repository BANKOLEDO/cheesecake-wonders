import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cheesecake Wonders",
  description: "Explore a world of delicious cheesecake options",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preload" as="image" href="/images/blog-img1.svg" />
      <link rel="preload" as="image" href="/images/blog-img2.svg" />
      <link rel="preload" as="image" href="/images/blog-img3.jpg" />
      <body>
        <Navbar className="mb-10"/>
        <main className="scroll-mt-24">{children}</main>
      </body>
    </html>
  );
}
