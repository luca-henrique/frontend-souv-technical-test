import { ProductProps } from "@/types/product";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/product";

export const ProductService = {
  /**
   * Obtém a lista de produtos com paginação.
   * @param page Número da página.
   * @param limit Limite de itens por página.
   */
  async getProducts(page: number, limit: number) {
    const response = await axios.get(
      `${API_BASE_URL}?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  /**
   * Cria um novo produto.
   * @param product Dados do produto a ser criado.
   */
  async createProduct(product: ProductProps) {
    const response = await axios.post(API_BASE_URL, product);
    return response.data;
  },

  /**
   * Atualiza o status "checked" de um produto.
   * @param id ID do produto.
   * @param checked Novo valor para o campo "checked".
   */
  async updateProductChecked(id: string, checked: boolean) {
    const response = await axios.patch(`${API_BASE_URL}/${id}/checked`, {
      checked,
    });
    return response.data;
  },
};
