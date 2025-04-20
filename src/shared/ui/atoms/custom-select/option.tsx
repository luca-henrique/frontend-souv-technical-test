import { components } from "react-select";

export const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        {props.data.icon}
        <span className="text-white">{props.data.label}</span>
      </div>
    </components.Option>
  );
};