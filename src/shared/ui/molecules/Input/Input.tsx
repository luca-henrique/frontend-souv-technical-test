"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputWithLabel = ({ label, name, ...props }: InputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor={name}
        className="text-gray-200 font-family-inter text-xs font-normal focus-visible:ring-purple-medium focus-visible:ring-1 focus-visible:ring-offset-0"
      >
        {label}
      </Label>
      <Input
        className="bg-gray-500 h-[40px] rounded-md border-gray-300 focus-visible:ring-[#9747FF] focus-visible:ring-1 focus-visible:ring-offset-0 text-white"
        id={name}
        {...props}
      />
    </div>
  );
};
