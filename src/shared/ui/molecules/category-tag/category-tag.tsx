import {
  AppleIcon,
  SandwichIcon,
  CarrotIcon,
  BeefIcon,
  MilkIcon,
} from "lucide-react";

export const CategoryTag = ({ category = "fruit" }: { category: string }) => {
  const styleByCategory = {
    bakery: {
      backgroundColor: "bg-yellow-dark",
      Icon: SandwichIcon,
      iconColor: "text-yellow",
      text: "padaria",
      textColor: "text-yellow",
    },
    vegetable: {
      backgroundColor: "bg-green-dark",
      Icon: CarrotIcon,
      iconColor: "text-green",
      text: "legume",
      textColor: "text-green",
    },
    fruit: {
      backgroundColor: "bg-orange-dark",
      Icon: AppleIcon,
      iconColor: "text-orange",
      text: "fruta",
      textColor: "text-orange",
    },
    drink: {
      backgroundColor: "bg-blue-dark",
      Icon: MilkIcon,
      iconColor: "text-blue",
      text: "bebida",
      textColor: "text-blue",
    },
    meat: {
      backgroundColor: "bg-pink-dark",
      Icon: BeefIcon,
      iconColor: "text-pink",
      text: "carne",
      textColor: "text-pink",
    },
  };

  const { backgroundColor, Icon, iconColor, text, textColor } =
    styleByCategory[category as keyof typeof styleByCategory];

  return (
    <div
      className={`${backgroundColor} flex flex-row items-center md:px-4 md:py-2 p-2  rounded-full gap-2`}
    >
      <Icon className={`${iconColor}`} size={14} />
      <h4
        className={`${textColor} hidden md:block font-family-inter font-semibold text-xs`}
      >
        {text}
      </h4>
    </div>
  );
};
