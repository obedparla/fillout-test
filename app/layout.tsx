import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import PageTabs from "@/components/navigation/PageTabs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const blMelody = localFont({
  src: "./fonts/BLMelody-Medium.woff2",
  variable: "--font-bl-melody",
});

export const metadata: Metadata = {
  title: "My form | Fillout",
  description:
    "Create and edit forms, surveys, and quizzes your audience will answer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${blMelody.variable} antialiased`}>
        <div className="flex h-screen flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="relative flex-1">
              {children}

              <div className="absolute right-0 bottom-0 left-0 z-10">
                <PageTabs />
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
