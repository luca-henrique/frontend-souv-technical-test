'use client'

import { ProductItem } from "../../molecules/product-item/product-item";

interface ListItemProps {
  items: {
    category: string;
    name: string;
    quantity: number;
  }[];
}

export const ProductItemList = ({ items }: ListItemProps) => {
  return (
    <div className="flex flex-col gap-3 mt-[40px]">
      {items.map((item) => (
        <ProductItem key={item.name} category={item.category} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};