import { createContext, useContext, useState } from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider as RHFProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  prefill: z.boolean(),
  confirmation: z.boolean(),
  name: z.string().min(1, "Nome é obrigatório"),
  /*... resto ...*/
  age: z.number().min(12, "Idade é obrigatória"),
  email: z.string().email("E-mail Invalido").optional(),
});

export type FormData = z.infer<typeof schema>;

interface FormState {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  onSubmit: SubmitHandler<FormData>;
}

const FormContext = createContext<FormState | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    prefill: true,
    confirmation: false,
    name: "",
    age: NaN,
  });

  const methods = useForm<FormData>({
    defaultValues: formData,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider
      value={{ step, setStep, formData, setFormData: updateFormData, onSubmit }}
    >
      <RHFProvider {...methods}>{children}</RHFProvider>
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormState must be used within a FormProvider");
  return context;
};