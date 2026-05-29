import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Headers from "./component/Headers";
import TerminalLine from "./component/TerminalLine";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYS.KAYY",
  description: "Terminal of Kayy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="app-container">
          <Headers />
          <div className="main-content">{children}</div>
          <div
            style={{
              background: "var(--bg)",
            }}
          >
            <TerminalLine />
            <Nav />
          </div>
        </div>
      </body>
    </html>
  );
}
