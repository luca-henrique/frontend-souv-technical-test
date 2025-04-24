import { ProductProps } from "@/types/product";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/product";

export const ProductService = {
  async getProducts(page: number, limit: number) {
    const response = await axios.get(
      `${API_BASE_URL}?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  async createProduct(product: ProductProps) {
    const response = await axios.post(API_BASE_URL, {
      ...product,
      checked: false,
    });
    return response.data;
  },

  async updateProductChecked(id: number, checked: boolean) {
    const response = await axios.patch(`${API_BASE_URL}/${id}/checked`, {
      checked,
    });
    return response.data;
  },

  async deleteProduct(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  },
};
