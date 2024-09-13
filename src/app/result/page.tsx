"use client";

import { useFormContext } from "@/context/FormContext";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "@/assets/symbol-rd-station-default.png";
import ArrowRight from "@/assets/long-arrow-alt-right.svg";
import ArrowBack from "@/assets/solid.svg";
import ArrowDown from "@/assets/downlong.svg";
import Button from "@/components/Button";

export default function ResultPage() {
  const { setFocus, reset, getValues, router } = useFormContext();

  const { name, email, phone } = getValues();

  const handleBackAndGenerateNewCard = () => {
    reset();
    router.push("/");
    setFocus("name");
  };

  useEffect(() => {
    if (!name) {
      router.push("/");
      setFocus("name");
    }
  }, [name, router, setFocus]);

  return (
    <main className="flex h-[calc(100vh-72px-56px)] w-full flex-col gap-6 bg-purple-400 px-6 pt-9 text-white">
      <button
        onClick={handleBackAndGenerateNewCard}
        className="flex items-center gap-[10px] body-sm"
      >
        <Image src={ArrowBack} alt="" />
        Gerar outro cartão
      </button>
      <div className="flex h-[159px] w-full items-center gap-5 rounded-3xl bg-white px-[15px] py-[15px] pl-9">
        <div className="">
          <Image
            src={Logo}
            alt=""
            className="h-[38px] min-w-[45px] max-w-[45px]"
          />
        </div>
        <span className="h-32 border-r-[3px] border-[#D8D9FD] bg-gray-200" />
        <div className="flex flex-col justify-between gap-6 text-[black] body-sm">
          <p>{name}</p>
          <p>{phone}</p>
          <p className="break-all">{email}</p>
        </div>
      </div>
      <div className="h-9 w-full">
        <Button
          paddingY="8px"
          fontSize="14px"
          imageHeight={20}
          imageWidth={20}
          iconStartSrc={ArrowDown.src}
          text="Baixar Cartão"
          disabled
        />
      </div>
      <div className="flex w-3/4 items-center justify-center gap-2 self-center">
        <a
          href="https://app.rdstation.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-primary text-[14px] font-black uppercase leading-5"
        >
          fazer um teste grátis do RD Station Marketing
        </a>
        <div
          className="max-h-5 min-h-5 min-w-5 max-w-5 bg-white"
          style={{
            WebkitMaskImage: `url('${ArrowRight.src}')`,
            maskImage: `url('${ArrowRight.src}')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </div>
    </main>
  );
}
