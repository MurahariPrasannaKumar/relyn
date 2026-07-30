import type { Metadata } from "next";
import { Roboto, Fraunces } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700", "900"]
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Relyn India Pvt Ltd | Reliable Household Help",
  description:
    "Relyn connects families with verified household professionals through a simple, transparent, and reliable matching process."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
