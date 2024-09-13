import * as yup from "yup";

export const landingPageFormSchema = yup.object({
  name: yup.string().min(2, "Nome inválido").required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido (00) [0]0000-0000")
    .required("Telefone é obrigatório"),
});
