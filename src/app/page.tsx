"use client";

import Image from "next/image";

import { ProductItemList } from "@/shared/ui/organisms/product-item-list/product-item-list";
import { Header } from "@/shared/ui/organisms/header/header";

export default function Home() {
  const items = [
    { category: "bakery", name: "Pão", quantity: 6 },
    { category: "vegetable", name: "Cebolinha", quantity: 1 },
    { category: "fruit", name: "Maça", quantity: 6 },
    { category: "drink", name: "Suco de laranja", quantity: 1 },
    { category: "meat", name: "Carne", quantity: 1 },
  ]
  return (
    <div className="bg-gray-600 h-screen flex flex-col  items-center">
      <Image
        src="/header.png"
        alt="logo"
        width={0}
        height={180}
        sizes="100vw"
        className="w-full h-[180px] object-cover relative"
      />
      <div className="flex flex-col w-full h-full absolute top-20 items-center">
        <Header />
        <ProductItemList items={items} />
      </div>
    </div>
  );
}






