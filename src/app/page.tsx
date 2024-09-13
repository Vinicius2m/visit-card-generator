import Image from "next/image";
import LandingPageSvg from "@/assets/landingpage.svg";
import LandingPageForm from "@/components/LandingPageForm";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-10 bg-purple-400 px-6 py-[54px] text-center text-white md:h-[calc(100vh-72px-56px)] lg:gap-11 lg:px-20 lg:py-[72px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="heading-red-hat md:font-headingRedHat md:text-[40px]">
            Gerador de Cartão de Visita
          </h1>
          <p className="max-w-[620px] subtitle-sm md:text-xl md:leading-7">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </p>
        </div>
        <div className="mt-11 flex w-full flex-col items-center justify-center md:mt-0 md:flex-row md:justify-between md:gap-28 lg:justify-center lg:gap-[190px]">
          <Image
            src={LandingPageSvg}
            alt=""
            quality={100}
            className="w-[82%] max-w-[470px]"
          />
          <LandingPageForm />
        </div>
      </main>
    </>
  );
}
