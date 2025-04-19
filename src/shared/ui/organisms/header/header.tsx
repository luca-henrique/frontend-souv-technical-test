'use client'

import { Apple, Beef, Carrot, ChevronDown, Milk, PlusIcon, Sandwich } from "lucide-react";
import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/Input/Input";
import { Label } from "@/components/ui/label";

import { KeyboardEvent, useRef, useState } from 'react'
import Select, { components } from "react-select";

export function onlyNumbers(e: KeyboardEvent<HTMLInputElement>) {
  const regex = /\d+/;

  if (
    !regex.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight"
  ) {
    e.preventDefault();
  }
}

const optionsQuantity = [
  { value: "unidade", label: "Un." },
  { value: "litro", label: "L" },
  { value: "kilograma", label: "Kg" },
];

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown size={16} />
    </components.DropdownIndicator>
  );
};

const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        {props.data.icon}
        <span className="text-white">{props.data.label}</span>
      </div>
    </components.Option>
  );
};

const optionsCategory = [
  {
    value: "padaria",
    label: "Padaria",
    icon: <Sandwich size={16} className="text-yellow" />,
  },
  {
    value: "legume",
    label: "Legume",
    icon: <Carrot size={16} className="text-green" />,
  },
  {
    value: "carne",
    label: "Carne",
    icon: <Beef size={16} className="text-pink" />,
  },
  {
    value: "fruta",
    label: "Fruta",
    icon: <Apple size={16} className="text-orange" />,
  },
  {
    value: "bebida",
    label: "Bebida",
    icon: <Milk size={16} className="text-blue" />,
  },
];

export const Header = () => {

  const [isSelectQuantityOpen, setIsSelectQuantityOpen] = useState(false);
  const [isSelectCategoryOpen, setIsSelectCategoryOpen] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemTypeOfQuantity, setItemTypeOfQuantity] = useState("unidade");
  const [itemCategory, setItemCategory] = useState("");

  const selectRef = useRef<any>(null);



  return (
    <header className="flex flex-col justify-between w-[720px]">
      <h1 className="text-gray-100 font-family-inter font-bold text-2xl mb-8">Lista de compras</h1>
      <div className="flex flex-row items-end gap-2">
        <InputWithLabel name="item" label="Item" />

        <div className="group max-w-[150px] w-full flex flex-col gap-2">
          <Label className="text-white">Quantidade</Label>
          <div className="flex rounded-md h-10 border border-gray-300">
            <input
              title="Quantidade"
              type="text"
              id="quantity"
              className="w-full h-10 rounded-l-md p-3 bg-gray-500 text-white outline-none focus:border focus:border-purple-light"
              autoComplete="off"
              maxLength={3}
              onKeyDown={(e) => onlyNumbers(e)}
              onChange={(e) => {
                if (e.target.value == "") {
                  setItemQuantity(Number(""));
                  return;
                }
                setItemQuantity(parseInt(e.target.value));
              }}
              value={itemQuantity}
            />
            <Select
              options={optionsQuantity}
              onChange={(e) => {
                if (e) {
                  setItemTypeOfQuantity(e.value);
                }
              }}
              components={{ DropdownIndicator }}
              unstyled={true}
              classNames={{
                control: () =>
                  "bg-gray-400 text-gray-200 flex items-center justify-between w-[72px] h-10 px-3 rounded-r-md text-xs uppercase border border-gray-300 focus-within:border-purple-light",
                dropdownIndicator: () =>
                  `${isSelectQuantityOpen
                    ? "rotate-180 text-purple-light"
                    : "rotate-0"
                  }`,
                option: () =>
                  `p-3 bg-gray-500 text-sm tracking-[0.42px] hover:bg-gray-300 text-white
                  }`,
                menuList: () =>
                  "divide-y-[1px] divide-gray-300 border border-gray-300 rounded-md mt-1",
                indicatorsContainer: () => "pointer-events-none",
              }}
              defaultValue={optionsQuantity[0]}
              onMenuOpen={() => setIsSelectQuantityOpen(true)}
              onMenuClose={() => setIsSelectQuantityOpen(false)}
            />
          </div>
        </div>

        <div className="group max-w-[179px] w-full flex flex-col gap-2 md:max-w-none">
          <Label className="text-white" >Quantidade</Label>
          <div className="h-10">
            <Select
              unstyled
              options={optionsCategory}
              onChange={(e) => {
                if (e) {
                  setItemCategory(e.value);
                }
              }}
              placeholder="Selecione"
              classNames={{
                control: () =>
                  "bg-gray-400 text-gray-200 tracking-[0.42px] flex items-center justify-between h-full px-3 rounded-md text-xs border border-gray-300 focus-within:border-purpleLight",
                container: () => "h-full",
                dropdownIndicator: () =>
                  `${isSelectCategoryOpen
                    ? "rotate-180 text-purple-light"
                    : "rotate-0"
                  }`,
                option: () =>
                  `p-3 bg-gray-500 text-sm tracking-[0.42px] hover:bg-gray-300
                  }`,
                menuList: () =>
                  "divide-y-[1px] divide-gray-300 border border-gray-300 rounded-md mt-1",
              }}
              components={{ DropdownIndicator, Option }}
              ref={selectRef}
              onMenuOpen={() => setIsSelectCategoryOpen(true)}
              onMenuClose={() => setIsSelectCategoryOpen(false)}
            />
          </div>
        </div>

        <Button className="bg-purple-medium rounded-full p-2 w-10 h-10 hover:purple-dark transition-colors">
          <PlusIcon color="#FBF9FE" />
        </Button>
      </div>
    </header>
  );
};