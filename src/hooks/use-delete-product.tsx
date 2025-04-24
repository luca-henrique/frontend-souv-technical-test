'use client'

import { ProductService } from "@/services/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface MutationProps {
  id: number;
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: MutationProps) => {
      return ProductService.deleteProduct(id)
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

