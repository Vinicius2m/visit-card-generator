import Logo from "@/assets/logo-rd-station-default.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-[72px] w-full items-center justify-between gap-8 p-6">
      <Image
        src={Logo}
        alt="Logo"
        className="h-6 w-[100px] xl:h-9 xl:w-[147px]"
      />
      <h1 className="font-headingGrotesque text-lg font-bold leading-5">
        Gerador de Cartão de Visita
      </h1>
    </header>
  );
}
