'use client'

import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { ProductItem } from "../../molecules/product-item/product-item";


export const ProductItemList = () => {

  const { items } = useShoppingList()

  return (
    <div className="flex flex-col gap-3 mt-[40px] w-full items-center">
      {items.map((item) => (
        <ProductItem key={item.name} {...item} />
      ))}
    </div>
  );
};