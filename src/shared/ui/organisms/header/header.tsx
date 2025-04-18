import { PlusIcon } from "lucide-react";
import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/Input/Input";



export const Header = () => {
  return (
    <header className="flex flex-col justify-between w-[720px]">
      <h1 className="text-gray-100 font-family-inter font-bold text-2xl mb-8">Lista de compras</h1>
      <div className="flex flex-row items-center gap-2">
        <InputWithLabel label="Item" />
        <Button className="bg-purple-medium rounded-full p-2">
          <PlusIcon color="#FBF9FE" />
        </Button>
      </div>
    </header>
  );
};