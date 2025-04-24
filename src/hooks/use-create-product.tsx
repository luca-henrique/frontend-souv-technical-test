'use client'

import { ProductService } from "@/services/product";
import { ProductProps } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductProps) => {
      return ProductService.createProduct(data)
    }
    ,
    onError: (error) => {
      console.error('Error:', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

};

