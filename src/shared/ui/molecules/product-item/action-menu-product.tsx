"use client";

import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { Edit2, EllipsisVerticalIcon, Trash2 } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { UpdateProductForm } from "./update-product-form";

interface ActionMenuProductProps {
  id: number;
}

export const ActionMenuProduct = ({ id }: ActionMenuProductProps) => {
  const { deleteItem } = useShoppingList();
  const [isVisibleActionOptions, setIsVisibleActionOptions] = useState(false);

  return (
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
          className="z-3 flex flex-col gap-1 absolute text-gray-100 bg-gray-500 border border-gray-400 rounded-md overflow-hidden right-0 top-[110%] shadow-sm shadow-gray-400"
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
          >
            <Trash2 size={16} />
            Excluir
          </button>

        </div>
      )}
    </button>
  );
};

