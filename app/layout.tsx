import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { BiPhone, BiLogoWhatsapp } from "react-icons/bi";

import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apotek Minangkes",
  description: "Apotek Minangkes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        <Navbar />
        <main className="main min-h-screen bg-slate-200">{children}</main>
        <footer className="h-60 bg-lime-600 p-14">
          <p className="text-3xl text-white text-center font-bold mb-8">
            JL. JENDERAL SUDIRMAN, SIMPANG IV TENGAH, LAMPAU TALANG, LUBUK
            BASUNG, AGAM, SUMATERA BARAT, KODE POS 26451
          </p>

          <div className="text-3xl text-white text-center font-bold flex gap-12 justify-center">
            <p className="flex gap-6 items-center">
              <span className="text-5xl">
                <BiPhone />
              </span>
              <span>(0752)708484</span>
            </p>
            <p className="flex gap-6 items-center">
              <span className="text-5xl">
                <BiLogoWhatsapp />
              </span>
              <span>082189896000</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
