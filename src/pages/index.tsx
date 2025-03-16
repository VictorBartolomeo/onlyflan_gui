/* import { Geist, Geist_Mono } from "next/font/google"; */

// COMPONENTS
import { LinkButton } from "@/components/button/link-button";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export default function Home() {
  return (
    <div className="pt-10 px-8">
      <h1 className="text-3xl font-bold underline text-center">Bienvenue sur le site OnlyFlan</h1>
      <h2 className="text-center mt-4">Cette fois, vous n’allez pas être mou du flan</h2>
      <div className="mx-auto w-max mt-10">
        <LinkButton url="/components">Voir les composants</LinkButton>
      </div>
    </div>
  );
}
