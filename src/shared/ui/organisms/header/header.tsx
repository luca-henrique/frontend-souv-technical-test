"use client";

import { RegisterProductForm } from "../register-product-form/register-product-form";

export const Header = () => {
  return (
    <header className="flex flex-col justify-between md:w-[720px] w-full">
      <h1 className="text-gray-100 font-family-inter font-bold text-2xl mb-8">
        Lista de compras
      </h1>
      <RegisterProductForm />
    </header>
  );
};