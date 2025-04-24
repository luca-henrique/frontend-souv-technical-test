"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any; // Control should be passed from the parent component
  className?: string;
}

export const InputWithLabel = ({ label, control, name, className, ...props }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div className="flex flex-col w-full items-start gap-1.5 focus-within:[&>label]:text-[#9747FF]">
            <Label
              htmlFor={name}
              className={`text-gray-200 font-family-inter text-xs font-normal transition-colors ${className}`}
            >
              {label}
            </Label>
            <Input
              className="bg-gray-500 w-full h-[40px] rounded-md border-gray-300 focus-visible:ring-transparent focus-visible:ring-offset-0 text-white focus-visible:border-purple-medium"
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              {...props}
            />
          </div>
        );
      }}
    />
  );
};
