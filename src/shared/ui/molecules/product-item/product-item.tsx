'use client'

import {
  EllipsisVerticalIcon,
  Trash2,
} from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { CategoryTag } from "../category-tag/category-tag";
import { useRef, useState } from "react";

export const touchIsSupported = typeof window !== "undefined" && window.matchMedia('(pointer: coarse)').matches;

interface ItemProps {
  category: string;
  name: string;
  quantity: number;
}


export const ProductItem = ({ category, name, quantity }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [optionsIsVisible, setOPtionsIsVisible] = useState(false);
  const optionsContainerRef = useRef<any>(null)


  return (
    <div
      className={`bg-gray-400 w-full md:w-[720px] p-4 items-center rounded-xl flex flex-row justify-between border-[#252529] border transition-all duration-300 ${isChecked ? "opacity-50" : ""
        }`}
    >
      <div className="flex flex-row items-center">
        <Checkbox
          data-istouchsupported={touchIsSupported}
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
          className="appearance-none w-4 h-4 border-[2px] border-purple-medium  checked:border-success-light checked:bg-success-light active:scale-95 transition-colors duration-100
          data-[istouchsupported=false]:hover:bg-purple-dark
          data-[state=checked]:bg-success-light data-[state=checked]:border-success-light
          "
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
        <div
          className="relative"
          onClick={() => {
            setOPtionsIsVisible((prevState) => !prevState);
          }}
          ref={optionsContainerRef}
        >
          <EllipsisVerticalIcon className="text-purpleLight cursor-pointer active:scale-95" />

          {optionsIsVisible && (
            <div
              className="flex flex-col gap-1 absolute text-gray-100 bg-gray-500 border border-gray-400 rounded-md overflow-hidden right-0 top-[110%] shadow-sm shadow-gray-400"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="flex items-center gap-2 text-sm p-3 cursor-pointer border border-gray-400 animate-[appear_.3s_backwards]
                data-[istouchsupported=false]:hover:bg-gray-300 
                data-[istouchsupported=false]:hover:border-gray-300
                "

                data-istouchsupported={touchIsSupported}
              >
                <Trash2 size={16} />
                Excluir
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};