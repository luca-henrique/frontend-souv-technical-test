'use client'

import {
  Apple,
  Beef,
  Carrot,
  Milk,
  PlusIcon,
  Sandwich,
} from "lucide-react";

import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/Input/Input";
import { CustomSelect } from "../../atoms/custom-select/custom-select";
import { SelectQuantity } from "../../molecules/select-quantity/select-quantity";

import { Controller } from "react-hook-form";

import { useRegisterProduct } from "./use-register-product";



const optionsCategory = [
  {
    value: "padaria",
    label: "Padaria",
    icon: <Sandwich size={16} className="text-yellow" />,
  },
  {
    value: "legume",
    label: "Legume",
    icon: <Carrot size={16} className="text-green" />,
  },
  {
    value: "carne",
    label: "Carne",
    icon: <Beef size={16} className="text-pink" />,
  },
  {
    value: "fruta",
    label: "Fruta",
    icon: <Apple size={16} className="text-orange" />,
  },
  {
    value: "bebida",
    label: "Bebida",
    icon: <Milk size={16} className="text-blue" />,
  },
];

export const RegisterProductForm = () => {

  const { handleSubmit, onSubmit, control } = useRegisterProduct()


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex md:flex-row flex-col items-end gap-2">
      <InputWithLabel
        control={control}
        name="item"
        label="Item"
        className="md:w-[368px] w-full"
      />
      <div className="flex flex-row items-end gap-2 w-full">
        <SelectQuantity
          control={control}
          name="quantity"
        />
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange } }) => (
            <CustomSelect
              label="Categoria"
              options={optionsCategory}
              placeholder="Selecione"
              onChange={(event) => onChange((event as { value: string })?.value)}
            />
          )}
        />

        <Button
          type="submit"
          className="bg-purple-medium rounded-full p-2 w-10 h-10 hover:purple-dark transition-colors"
        >
          <PlusIcon color="#FBF9FE" />
        </Button>
      </div>
    </form>
  )

}