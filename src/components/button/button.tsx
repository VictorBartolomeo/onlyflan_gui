// NEXT
import { ReactNode } from "react";

// COMPONENTS
import { CustomIcon } from "../icons/icon";

// TYPING & ENUM
import { IconName } from "../icons/icon.enum";
import { ButtonColor, ButtonSize, ButtonWidth } from "./button.enum";

// TYPING
export interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  width?: ButtonWidth;
  size?: ButtonSize;
  className?: string;
  iconName?: IconName;
  disabled?: boolean;
}

/* TODO MODIFIER LES COULEURS QUAND ON LES AURA */
export const CustomButton = ({
  children,
  onClick,
  color,
  width,
  size,
  className,
  iconName,
  disabled,
}: ButtonProps) => {
  let classes = `${className} rounded-lg font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-x-2 cursor-pointer disabled:opacity-60 disabled:cursor-default `;
  let sizeOfButton;
  let iconSize = 18;

  switch (color) {
    case ButtonColor.Secondary:
      classes +=
        " bg-secondary text-black hover:bg-secondary-hover active:bg-secondary active:ring active:ring-secondary/40 disabled:hover:bg-secondary disabled:active:ring-0 ";
      break;
    case ButtonColor.Primary:
    default:
      classes +=
        " bg-main text-text hover:bg-main-hover active:bg-main active:ring active:ring-main/40 disabled:hover:bg-main disabled:active:ring-0";
      break;
  }

  switch (size) {
    case ButtonSize.Tiny:
      sizeOfButton = "py-2.5 px-3.5 text-sm leading-4";
      iconSize = 15;
      break;
    case ButtonSize.Normal:
    default:
      sizeOfButton = "py-2.5 px-[18px] ";
      break;
  }

  switch (width) {
    case ButtonWidth.Full:
      classes += " w-full";
      break;
    case ButtonWidth.Content:
    default:
      classes += " w-max";
      break;
  }

  return (
    <button className={`${classes} ${sizeOfButton}`} onClick={onClick} disabled={disabled}>
      {children}
      {iconName && <CustomIcon name={iconName} size={iconSize} />}
    </button>
  );
};
