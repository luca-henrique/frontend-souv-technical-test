"use client";

import { Edit2, EllipsisVerticalIcon, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryTag } from "../category-tag/category-tag";
import { useState } from "react";
import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export const touchIsSupported =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

interface ItemProps {
  category: string;
  name: string;
  quantity: number;
  unit: string;
  id: number;
  checked: boolean;
}

export const ProductItem = ({
  category,
  name,
  quantity,
  unit,
  id,
  checked,
}: ItemProps) => {
  const { toggleItemChecked } = useShoppingList();

  return (
    <div
      className={`bg-gray-400 w-full md:w-[720px] p-4 items-center rounded-xl flex flex-row justify-between border-[#252529] border transition-all duration-300 ${checked ? "opacity-50" : ""
        }`}
    >
      <div className="flex flex-row items-center">
        <Checkbox
          data-istouchsupported={touchIsSupported}
          checked={checked}
          onCheckedChange={() => toggleItemChecked(id)}
          className="appearance-none w-4 h-4 border-[2px] border-purple-medium  checked:border-success-light checked:bg-success-light active:scale-95 transition-colors duration-100
          data-[istouchsupported=false]:hover:bg-purple-dark
          data-[state=checked]:bg-success-light data-[state=checked]:border-success-light
          "
        />
        <div className="flex flex-col ml-4">
          <h4
            className={`font-family-inter font-bold text-gray-100 transition-all duration-300 ${checked ? "line-through opacity-50" : ""
              }`}
          >
            {name}
          </h4>
          <p className="text-gray-200 font-family-inter font-normal">
            {quantity} {unit}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <CategoryTag category={category} />
        <ProductItemMenu
          id={id}
          name={name}
          quantity={quantity}
          unit={unit}
          category={category}
        />
      </div>
    </div>
  );
};

interface ProductItemMenuProps {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: string;
}

export const ProductItemMenu = ({
  id,
  name,
  quantity,
  unit,
  category,
}: ProductItemMenuProps) => {
  const [isVisibleActionOptions, setIsVisibleActionOptions] = useState(false);
  const { deleteItem, updateItem } = useShoppingList();

  const handleEdit = (data: {
    name: string;
    quantity: number;
    unit: string;
    category: string;
  }) => {
    updateItem(id, data);
  };

  return (
    <>
      <button
        type="button"
        title="Menu"
        aria-label="Menu"
        className="relative"
        onClick={() => {
          setIsVisibleActionOptions((prevState) => !prevState);
        }}
      >
        <EllipsisVerticalIcon className="text-purple-light cursor-pointer active:scale-95" />

        {isVisibleActionOptions && (
          <div
            role="menu"
            tabIndex={0}
            className="flex flex-col gap-1 absolute text-gray-100 bg-gray-500 border border-gray-400 rounded-md overflow-hidden right-0 top-[110%] shadow-sm shadow-gray-400"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsVisibleActionOptions(false);
              }
            }}
          >
            <button
              className="flex items-center gap-2 text-sm p-3 cursor-pointer border border-gray-400 animate-[appear_.3s_backwards]
                data-[istouchsupported=false]:hover:bg-gray-300 
                data-[istouchsupported=false]:hover:border-gray-300
                "
              onClick={() => {
                deleteItem(id);
              }}
              data-istouchsupported={touchIsSupported}
            >
              <Trash2 size={16} />
              Excluir
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="flex items-center gap-2 text-sm p-3 cursor-pointer border border-gray-400 animate-[appear_.3s_backwards]
                    data-[istouchsupported=false]:hover:bg-gray-300 
                    data-[istouchsupported=false]:hover:border-gray-300
                    "
                  data-istouchsupported={touchIsSupported}
                  onClick={() => setIsVisibleActionOptions(false)}
                >
                  <Edit2 size={16} />
                  Editar
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editar Produto</DialogTitle>
                  <DialogClose />
                </DialogHeader>
                <EditProductForm
                  id={id}
                  name={name}
                  quantity={quantity}
                  unit={unit}
                  category={category}
                  onSubmit={handleEdit}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </button>
    </>
  );
};

interface EditProductFormProps {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  onSubmit: (data: {
    name: string;
    quantity: number;
    unit: string;
    category: string;
  }) => void;
}

const EditProductForm = ({
  name,
  quantity,
  unit,
  category,
  onSubmit,
}: EditProductFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { name, quantity, unit, category },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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