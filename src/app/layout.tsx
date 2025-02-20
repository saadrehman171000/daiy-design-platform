import type { Metadata } from "next";
import "./globals.css";
import HamburgerMenu from "./components/HamburgerMenu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header> 
        </header>
        <main className="animate-easeIn">
          {children}
        </main>
      </body>
    </html>
  );
}
