import Image from "next/image";
import LandingPageSvg from "@/assets/landingpage.svg";
import LandingPageForm from "@/components/LandingPageForm";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-10 bg-purple-400 px-6 py-[54px] text-center text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="heading-red-hat">Gerador de Cartão de Visita</h1>
          <p className="subtitle-sm">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </p>
        </div>
        <div className="mt-11 flex w-full flex-col items-center justify-center">
          <Image
            src={LandingPageSvg}
            alt=""
            quality={100}
            className="w-[82%]"
          />
          <LandingPageForm />
        </div>
      </main>
    </>
  );
}
