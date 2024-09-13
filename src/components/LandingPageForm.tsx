"use client";

import Button from "@/components/Button";
import ArrowRight from "@/assets/long-arrow-alt-right.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { landingPageFormSchema } from "@/schemas/landingPageFormSchema";
import InputMask, { BeforeMaskedStateChangeStates } from "react-input-mask";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

export default function LandingPageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(landingPageFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const beforeMaskedValueChange = ({
    currentState,
    nextState,
  }: BeforeMaskedStateChangeStates) => {
    let { value } = currentState;
    const { selection } = nextState;

    const newValue = value.replace(/\D/g, "");

    let cursorPosition = selection?.start ?? newValue.length;

    if (newValue.length === 11) {
      value = newValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      cursorPosition += value.length - newValue.length;
    } else if (newValue.length === 10) {
      value = newValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
      cursorPosition += value.length - newValue.length;
    } else {
      value = newValue;
    }

    return {
      ...currentState,
      value,
      selection: { start: cursorPosition, end: cursorPosition },
    };
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex w-full flex-col items-center justify-center gap-6"
    >
      <div className="flex w-full flex-col items-start gap-3">
        <label className="font-primary text-[14px] font-bold leading-[14px]">
          Nome*
        </label>
        <input
          type="text"
          placeholder={errors.name ? errors.name!.message : "Nome do cartão"}
          {...register("name")}
          className={
            errors.name
              ? "w-full border-2 border-red-500 px-3 py-2 text-[black] placeholder-red-500 subtitle-xs"
              : "w-full border-2 border-transparent px-3 py-2 text-[black] subtitle-xs"
          }
        />
        {errors.name && (
          <p className="text-xs font-bold text-white">{errors.name?.message}</p>
        )}
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <label className="font-primary text-[14px] font-bold leading-[14px]">
          Telefone*
        </label>
        <InputMask
          mask="(99) 99999-9999"
          type="text"
          placeholder={
            errors.phone ? errors.phone!.message : "(00) [0]0000-0000"
          }
          {...register("phone")}
          beforeMaskedStateChange={beforeMaskedValueChange}
          maskPlaceholder={null}
          className={
            errors.phone
              ? "w-full border-2 border-red-500 px-3 py-2 text-[black] placeholder-red-500 subtitle-xs"
              : "w-full border-2 border-transparent px-3 py-2 text-[black] subtitle-xs"
          }
        />
        {errors.phone && (
          <p className="text-xs font-bold text-white">
            {errors.phone?.message}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <label className="font-primary text-[14px] font-bold leading-[14px]">
          E-mail*
        </label>
        <input
          type="text"
          placeholder={errors.email ? errors.email!.message : "nome@email.com"}
          {...register("email")}
          className={
            errors.email
              ? "w-full border-2 border-red-500 px-3 py-2 text-[black] placeholder-red-500 subtitle-xs"
              : "w-full border-2 border-transparent px-3 py-2 text-[black] subtitle-xs"
          }
        />
        {errors.email && (
          <p className="text-xs font-bold text-white">
            {errors.email?.message}
          </p>
        )}
      </div>

      <ul className="flex list-inside list-disc flex-col items-start">
        <li className="ml-3 text-start font-primary text-xs font-normal leading-[18px]">
          Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses.
        </li>
        <li className="ml-3 text-start font-primary text-xs font-normal leading-[18px]">
          Ao informar meus dados, eu concordo com a Política de privacidade.
        </li>
      </ul>

      <p className="text-start font-primary text-xs font-normal leading-[18px]">
        * Você pode alterar suas permissões de comunicação a qualquer tempo.
      </p>

      <Button
        text="Gerar CARTÃO Grátis"
        iconEndSrc={ArrowRight}
        type="submit"
      />
    </form>
  );
}
