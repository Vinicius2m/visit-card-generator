import Logo from "@/assets/symbol-rd-station-default.png";
import ArrowRight from "@/assets/long-arrow-alt-right.svg";
import ArrowBack from "@/assets/solid.svg";
import ArrowDown from "@/assets/downlong.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { useFormContext } from "@/context/FormContext";

export default function VisitCardContainer() {
  const { setFocus, reset, getValues, router } = useFormContext();

  const { name, email, phone } = getValues();

  const handleBackAndGenerateNewCard = () => {
    reset();
    router.push("/");
    setFocus("name");
  };

  return (
    <div className="flex w-2/4 min-w-[330px] max-w-[510px] flex-col justify-center gap-6 text-white xl:min-w-[510px]">
      <button
        onClick={handleBackAndGenerateNewCard}
        className="flex items-center gap-[10px] body-sm md:font-primary md:text-xl md:font-normal md:leading-[30px]"
      >
        <div className="flex h-4 w-4 items-center justify-center md:h-5 md:w-5">
          <Image src={ArrowBack} alt="" />
        </div>
        Gerar outro cartão
      </button>
      <div className="flex h-[159px] w-full max-w-[510px] items-center gap-5 rounded-3xl bg-white px-[15px] py-[15px] pl-9 md:h-[247px]">
        <div className="">
          <Image
            src={Logo}
            alt=""
            className="h-[38px] min-w-[45px] max-w-[45px] md:h-[60px] md:min-w-[70px] md:max-w-[70px]"
          />
        </div>
        <span className="h-32 border-r-[3px] border-[#D8D9FD] bg-gray-200 md:h-[183px]" />
        <div className="flex flex-col justify-between gap-6 text-[black] body-sm md:body-md lg:body-lg">
          <p>{name}</p>
          <p>{phone}</p>
          <p className="break-all">{email}</p>
        </div>
      </div>
      <div className="h-9 w-full">
        <Button
          responsiveFontSize={{ base: "text-[14px]", md: "text-[16px]" }}
          responsivePaddingY={{ base: "py-2", md: "py-3" }}
          imageHeight={20}
          imageWidth={20}
          iconStartSrc={ArrowDown.src}
          text="Baixar Cartão"
          disabled
        />
      </div>
      <div className="flex w-3/4 items-center justify-center gap-2 self-center lg:w-full">
        <a
          href="https://app.rdstation.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-primary text-[14px] font-black uppercase leading-5 lg:text-[16px] lg:leading-6"
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
    </div>
  );
}
