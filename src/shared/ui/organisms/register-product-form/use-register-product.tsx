"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues } from "./register-product-form.type";
import { formSchema } from "./register-product-form.schema";
import { useShoppingList } from "@/app/providers/shopping-list-provider";

export const useRegisterProduct = () => {
  const { addItem } = useShoppingList();

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item: "",
      quantity: { unit: "", quantity: 0 },
      category: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data: FormValues) => {
    addItem({
      name: data.item,
      quantity: data.quantity.quantity,
      unit: data.quantity.unit,
      category: data.category,
    });

    reset();
  };

  return { onSubmit, control, handleSubmit, errors };
};
