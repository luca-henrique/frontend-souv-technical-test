"use client";

import Image from "next/image";

import { ProductItemList } from "@/shared/ui/organisms/product-item-list/product-item-list";
import { Header } from "@/shared/ui/organisms/header/header";

export default function Home() {
  return (
    <div className="bg-gray-600 h-screen flex flex-col  items-center ">
      <div className="relative w-full h-[180px]">
        <Image
          src="/header.png"
          alt="logo"
          fill
          sizes="100vw"
          className="md:object-cover"
        />
      </div>
      <div className="flex flex-col w-full absolute top-12 items-center p-6">
        <Header />
        <ProductItemList />
      </div>
    </div>
  );
}






