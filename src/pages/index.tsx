/* import { Geist, Geist_Mono } from "next/font/google"; */

// COMPONENTS
import { CustomIcon } from "@/components/icons/icon";
import { IconName } from "@/components/icons/icon.enum";

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

      <h3 className="">En dessous les composants déjà créés 👇</h3>
      <div className="flex items-center gap-3 mt-3">
        <CustomIcon name={IconName.ArrowDown} size={32} onClick={() => console.log("je clique")} />
        <CustomIcon name={IconName.At} size={32} />
        <CustomIcon name={IconName.Envelope} size={32} />
        <CustomIcon name={IconName.Eye} size={32} className="text-main" />
        <CustomIcon name={IconName.EyeClose} size={32} />
        <CustomIcon name={IconName.Facebook} size={32} />
        <CustomIcon name={IconName.Instagram} size={32} />
        <CustomIcon name={IconName.Location} size={32} />
      </div>
    </div>
  );
}
