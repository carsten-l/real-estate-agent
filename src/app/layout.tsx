import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";
import "./globals.css";
import FooterIconGroup from "@/components/FooterIconGroup";
import { IoMdCall } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Din Mægler",
  description: "En fiktiv ejendomsmægler med fiktive ejendomme",
};

export default function RootLayout({
  children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>
          {children}
        </main>
        <footer className="pt-16 bg-linear-to-t from-white from-35% to-35% to-transparent">
          <div className="container mx-auto">
            <Image src="/din_maegler_logo.png" width={296} height={49} alt="Din Mægler" />
            <p className="my-6">
            Din Mægler er din landsdækkende ejendomsmæglerkæde. <br />Vi sikrer et trygt og effektivt boligsalg - hurtigt og problemfrit.
            </p>
            <div className="grid grid-cols-[4fr_6fr] gap-20 pb-16">
              <div className="border p-12 bg-white ">
                <FooterIconGroup 
                    icon={<IoMdCall size="2em" />}
                    smallText="Ring til os"
                    bigText="+45 7070 4000"
                />
                <FooterIconGroup 
                    icon={<IoMdPaperPlane size="2em" />}
                    smallText="Send os en mail"
                    bigText="4000@dinmaegler.com"
                />
                <FooterIconGroup 
                    icon={<IoMdPin size="2em" />}
                    smallText="Besøg os"
                    bigText="Stændertorvet 78, 4000 Roskilde"
                />
                <p className="text-balance">Din Mægler Roskilde er din boligbutik i lokalområdet.</p>

              </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Quicklinks</h3>
                <p>Boliger til salg</p>
                <p>Mæglere</p>
                <p>Kontakt os</p>
                <p>Log ind / bliv bruger</p>
              </div>
              <div className="mt-auto">
                <Image width={228} height={78} src="/dms_logo.png" alt="Medlem af Dansk Mægler Sammenslutning" />
              </div>
            </div>
            </div>
          </div>
          <div>
            <p className="p-2 bg-primary text-white text-center text-balance">© 2026 Din Mægler</p>
          </div>
        </footer>
      </body>

    </html>
  );
}
