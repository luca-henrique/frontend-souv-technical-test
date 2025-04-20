import { ChevronDown } from "lucide-react";
import { components } from "react-select";

export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown size={16} />
    </components.DropdownIndicator>
  );
};