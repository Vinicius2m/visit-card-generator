"use client";

import Button from "@/components/Button";
import ArrowRight from "@/assets/long-arrow-alt-right.svg";
import InputMask, { BeforeMaskedStateChangeStates } from "react-input-mask";
import { useFormContext } from "@/context/FormContext";

export default function LandingPageForm() {
  const { register, handleSubmit, errors, router } = useFormContext();

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
      cursorPosition = newValue.length;
    }

    return {
      ...currentState,
      value,
      selection: { start: cursorPosition, end: cursorPosition },
    };
  };

  return (
    <form
      onSubmit={handleSubmit(() => router.push("/result"))}
      className="mt-12 flex h-full w-full max-w-[620px] flex-col items-center justify-center gap-6 md:m-0 md:items-stretch"
    >
      <div className="flex w-full flex-col items-start gap-3">
        <label className="font-primary text-[14px] font-bold leading-[14px]">
          Nome*
        </label>
        <input
          type="text"
          placeholder={errors.name ? errors.name!.message : "Nome no cartão"}
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
      <div className="flex w-full flex-col gap-6 md:flex-row">
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
            placeholder={
              errors.email ? errors.email!.message : "nome@email.com"
            }
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
      </div>

      <ul className="flex list-inside list-disc flex-col items-start">
        <li className="ml-3 text-start font-primary text-xs font-normal leading-[18px] md:ml-2">
          Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses.
        </li>
        <li className="ml-3 text-start font-primary text-xs font-normal leading-[18px] md:ml-2">
          Ao informar meus dados, eu concordo com a Política de privacidade.
        </li>
      </ul>

      <p className="self-start font-primary text-xs font-normal leading-[18px]">
        * Você pode alterar suas permissões de comunicação a qualquer tempo.
      </p>

      <Button
        text="Gerar CARTÃO Grátis"
        iconEndSrc={ArrowRight.src}
        type="submit"
      />
    </form>
  );
}
