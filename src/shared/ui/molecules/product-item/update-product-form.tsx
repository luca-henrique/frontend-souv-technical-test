'use client'

import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { useForm } from "react-hook-form";

interface EditProductFormProps {
  id: number;
}

export const UpdateProductForm = ({ id }: EditProductFormProps) => {
  const { getItemById } = useShoppingList();

  const { register, handleSubmit } = useForm({
    defaultValues: { ...getItemById(id) },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 p-4 bg-gray-500 rounded-md"
    >
      <label className="flex flex-col gap-1">
        Nome
        <input
          {...register("name")}
          className="p-2 rounded-md border border-gray-300"
        />
      </label>
      <label className="flex flex-col gap-1">
        Quantidade
        <input
          type="number"
          {...register("quantity")}
          className="p-2 rounded-md border border-gray-300"
        />
      </label>
      <label className="flex flex-col gap-1">
        Unidade
        <input
          {...register("unit")}
          className="p-2 rounded-md border border-gray-300"
        />
      </label>
      <label className="flex flex-col gap-1">
        Categoria
        <input
          {...register("category")}
          className="p-2 rounded-md border border-gray-300"
        />
      </label>
      <button
        type="submit"
        className="p-2 bg-purple-medium text-white rounded-md"
      >
        Salvar
      </button>
    </form>
  );
};
