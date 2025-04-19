'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define o tipo para um item de produto
type ProductItem = {
  id: number;
  name: string;
  quantity: number;
};

// Define o tipo para o contexto
type ShoppingListContextType = {
  items: ProductItem[];
  addItem: (item: ProductItem) => void;
  updateItem: (id: number, updatedItem: Partial<ProductItem>) => void;
  deleteItem: (id: number) => void;
};

// Cria o contexto
const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);

// Componente Provider
export const ShoppingListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ProductItem[]>([]);

  // Função para adicionar um item
  const addItem = (item: ProductItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Função para atualizar um item
  const updateItem = (id: number, updatedItem: Partial<ProductItem>) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // Função para deletar um item
  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

// Hook para usar o contexto
export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error('useShoppingList deve ser usado dentro de um ShoppingListProvider');
  }
  return context;
};