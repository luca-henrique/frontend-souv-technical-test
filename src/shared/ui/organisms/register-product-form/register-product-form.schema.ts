import { z } from "zod";

export const formSchema = z.object({
  item: z.string().min(1, "O nome do item é obrigatório"),
  quantity: z.object({
    quantity: z.number().min(1, "A quantidade deve ser maior que 0"),
    unit: z.string().min(1, "A unidade é obrigatória"),
  }),
  category: z.string().min(1, "A categoria é obrigatória"),
});
