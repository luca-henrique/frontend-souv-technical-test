'use client'

import {
  EllipsisVerticalIcon,
} from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { CategoryTag } from "../category-tag/category-tag";
import { useState } from "react";

interface ItemProps {
  category: string;
  name: string;
  quantity: number;
}


export const ProductItem = ({ category, name, quantity }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`bg-gray-400 w-full md:w-[720px] p-4 items-center rounded-xl flex flex-row justify-between border-[#252529] border transition-all duration-300 ${isChecked ? "opacity-50" : ""
        }`}
    >
      <div className="flex flex-row items-center">
        <Checkbox
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
        />
        <div className="flex flex-col ml-4">
          <h4
            className={`font-family-inter font-bold text-gray-100 transition-all duration-300 ${isChecked ? "line-through opacity-50" : ""
              }`}
          >
            {name}
          </h4>
          <p className="text-gray-200 font-family-inter font-normal">
            {quantity} unidades
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <CategoryTag category={category} />
        <EllipsisVerticalIcon color="#A881E6" />
      </div>
    </div>
  );
};