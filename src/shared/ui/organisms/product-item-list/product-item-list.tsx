'use client'

import { useShoppingList } from "@/app/providers/shopping-list-provider";
import { ItemProps, ProductItem } from "../../molecules/product-item/product-item";
import { EmptyList } from "../../molecules/empty-list/empty-list";
import { Spinner } from "../../atoms/loading/loading";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const sortProducts = (products: ItemProps[]): ItemProps[] => {
  return [...products].sort((a, b) => Number(a.checked) - Number(b.checked));
};

export const ProductItemList = () => {

  const { products, isLoading, handleNextPage, handlePreviuesPage } = useShoppingList()

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
      {sortProducts(products.data).map((item) => (
        <ProductItem key={`${item.id}-${item.name}`} {...item} />
      ))}
      <PaginationDemo currentPage={products.currentPage} handleNextPage={handleNextPage} handlePreviuesPage={handlePreviuesPage} {...products} />
    </div>
  );
};

interface PaginationDemoProps {
  currentPage: number;
  handleNextPage: () => void;
  handlePreviuesPage: () => void;
}


export function PaginationDemo({ currentPage, handleNextPage, handlePreviuesPage }: PaginationDemoProps) {

  return (
    <Pagination className="mt-3">
      <PaginationContent>
        <PaginationItem className="bg-purple-medium text-white rounded-md" onClick={handlePreviuesPage}>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem className="bg-purple-medium text-white rounded-md">
          <PaginationLink >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem className="bg-purple-medium text-white rounded-md" onClick={handleNextPage}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}