'use client'

import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { ProductItem } from "../../molecules/product-item/product-item";
import { EmptyList } from "../../molecules/empty-list/empty-list";
import { Spinner } from "../../atoms/loading/loading";


export const ProductItemList = () => {

  const { products, isLoading } = useShoppingList()

  console.log(products)

  if (isLoading) {
    return (
      <Spinner size='large' className="text-white" />
    )
  }

  if (products.data.length === 0) {
    return (<EmptyList />)
  }

  return (
    <div className="flex flex-col gap-3 mt-[40px] w-full items-center">
      {products.data.map((item) => (
        <ProductItem key={item.name} {...item} />
      ))}
    </div>
  );
};