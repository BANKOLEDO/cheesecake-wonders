import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <link rel="preload" as="image" href="/images/blog-img1.webp" />
      <link rel="preload" as="image" href="/images/blog-img2.webp" />
      <link rel="preload" as="image" href="/images/blog-img3.webp" />
      <body>
        <main className="scroll-mt-24">{children}</main>
      </body>
    </html>
  );
}
