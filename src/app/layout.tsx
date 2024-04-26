import type { Metadata } from "next";
import { Inter,Lato } from "next/font/google";
import "./globals.css";
import ParticlesProvider from "@/context/particles-provider";

const lato = Lato({ weight: "400", subsets:["latin"] });

export const metadata: Metadata = {
  title: "RutonCode",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ParticlesProvider>{children}</ParticlesProvider>
      </body>
    </html>
  );
}
