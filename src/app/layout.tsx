import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/navbar";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluman",
  description: "Soluciones a la mano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>

        <div className="fixed z-10 w-screen bg-gradient-to-b from-black text-white">
          <NavBar />
        </div>

        <div className="fixed z-10 bottom-0 left-0 m-6">
          <Link href={'/'}>
            <Image src={'/images/icons/icon_whatsapp.png'} alt="" width={1000} height={1000} className="h-20 w-20"/>
          </Link>
        </div>

        <div>
          {children}
        </div>

      </body>
    </html>
  );
}