import Logo from "@/assets/logo-rd-station-default.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-[72px] w-full items-center justify-between gap-8 p-6 md:px-20 md:py-6">
      <Image
        src={Logo}
        alt="Logo"
        className="h-6 w-[100px] md:h-9 md:w-[150px] xl:h-9"
      />
      <h1 className="font-headingGrotesque text-lg font-bold leading-5 md:text-2xl md:leading-6">
        Gerador de Cartão de Visita
      </h1>
    </header>
  );
}
