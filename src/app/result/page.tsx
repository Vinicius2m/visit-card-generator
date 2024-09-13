"use client";

import LandingPageSvg from "@/assets/landingpage.svg";
import { useFormContext } from "@/context/FormContext";
import { useEffect } from "react";
import VisitCardContainer from "@/components/VisitCardContainer";
import Image from "next/image";

export default function ResultPage() {
  const { getValues, router } = useFormContext();

  const { name } = getValues();

  useEffect(() => {
    if (!name) {
      router.push("/");
    }
  }, [name, router]);

  return (
    <main className="flex h-[calc(100vh-72px-56px)] w-full flex-col items-center gap-6 bg-purple-400 px-6 pt-9 text-white md:flex-row md:justify-center lg:px-[150.5] lg:py-[92px] xl:px-[191.5px] xl:py-[117.5px]">
      <Image
        src={LandingPageSvg}
        priority
        alt=""
        quality={100}
        className="hidden h-[335px] w-2/4 max-w-[475px] md:block"
      />
      <VisitCardContainer />
    </main>
  );
}
