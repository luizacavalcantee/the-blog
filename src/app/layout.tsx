import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Poppins } from "next/font/google";
  
  const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-roboto",
  });
  
  const poppins = Poppins({
    weight: ["500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
  });
  
  export const metadata: Metadata = {
    title: "The blog",
    description: "Blog de atualizações dev",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${roboto.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
  