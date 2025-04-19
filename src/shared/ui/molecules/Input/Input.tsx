"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputWithLabel = ({ label, name, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full items-start gap-1.5 focus-within:[&>label]:text-[#9747FF]">
      <Label
        htmlFor={name}
        className="text-gray-200 font-family-inter text-xs font-normal transition-colors"
      >
        {label}
      </Label>
      <Input
        className="bg-gray-500 h-[40px] rounded-md border-gray-300 focus-visible:ring-transparent focus-visible:ring-offset-0 text-white focus-visible:border-purple-medium"
        id={name}
        {...props}
      />
    </div>
  );
};
