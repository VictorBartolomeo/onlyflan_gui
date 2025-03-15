/* import { Geist, Geist_Mono } from "next/font/google"; */

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
    <>
      <h1 className="text-3xl font-bold underline xs:bg-main lg:bg-secondary">
        Bienvenue sur le site OnlyFlan
      </h1>
      <h2>Cette fois, vous n’allez pas être mou du flan</h2>
    </>
  );
}
