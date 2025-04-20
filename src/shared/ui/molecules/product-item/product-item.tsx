"use client";


import { Checkbox } from "@/components/ui/checkbox";
import { CategoryTag } from "../category-tag/category-tag";
import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { ActionMenuProduct } from "./action-menu-product";

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
        <ActionMenuProduct id={id} />
      </div>
    </div>
  );
};
