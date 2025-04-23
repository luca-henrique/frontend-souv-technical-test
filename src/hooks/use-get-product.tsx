'use client'

import { ProductService } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => ProductService.getProducts(page, limit),
  });
};