import { z } from "zod";
import { formSchema } from "./register-product-form.schema";

export type FormValues = z.infer<typeof formSchema>;
