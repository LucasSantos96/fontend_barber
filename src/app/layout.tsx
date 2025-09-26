import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ClientProvider } from "@/context/ClientContext";
import { PlanProvider } from "@/context/PlanContext";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "System Barber",
  description: "Gerencie os planos da sua barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-Br">
      <body
        className={`${montserrat.variable} antialiased `}
      >
    <ClientProvider>
       <PlanProvider>
        <Navbar/>
        {children}
        </PlanProvider>
    </ClientProvider>
      </body>
    </html>
  );
}
