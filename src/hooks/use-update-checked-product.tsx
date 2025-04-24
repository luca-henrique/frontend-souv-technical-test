'use client'

import { ProductService } from "@/services/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface MutationProps {
  id: number;
  checked: boolean
}

export const useUpdateProductChecked = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, checked }: MutationProps) => {
      return ProductService.updateProductChecked(id, checked)
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

