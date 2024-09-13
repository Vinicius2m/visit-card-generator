"use client";

import { landingPageFormSchema } from "@/schemas/landingPageFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import {
  FieldErrors,
  useForm,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetFocus,
} from "react-hook-form";

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface FormContextType {
  setFocus: UseFormSetFocus<FormState>;
  router: ReturnType<typeof useRouter>;
  register: UseFormRegister<FormState>;
  handleSubmit: UseFormHandleSubmit<FormState, undefined>;
  errors: FieldErrors<FormState>;
  getValues: UseFormGetValues<FormState>;
  reset: UseFormReset<FormState>;
}

const FormContext = React.createContext<FormContextType>({} as FormContextType);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const {
    setFocus,
    reset,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    resolver: yupResolver(landingPageFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
    },
  });

  return (
    <FormContext.Provider
      value={{
        setFocus,
        reset,
        getValues,
        register,
        handleSubmit,
        errors,
        router,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormContext must be used within a FormProvider");
  }

  return context;
};
