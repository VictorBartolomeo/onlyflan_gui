// NEXT
import Link from "next/link";
import { ReactNode } from "react";

// COMPONENTS
import { CustomButton } from "./button";

// ENUM & TYPING
import { ButtonColor, ButtonSize, ButtonWidth } from "./button.enum";

export interface LinkButtonProps {
  children: ReactNode;
  url: string;
  blank?: boolean;
  color?: ButtonColor;
  width?: ButtonWidth;
  size?: ButtonSize;
  disabled?: boolean | undefined;
  className?: string;
  loading?: boolean;
}

/* TODO MODIFIER LES COULEURS QUAND ON LES AURA */
export const LinkButton = ({
  children,
  url,
  blank,
  color,
  width,
  size,
  disabled,
  className,
}: LinkButtonProps) => {
  let target = "_self";
  let rel = "";

  if (blank) {
    target = "_blank";
    rel = "noopener noreferrer";
  }

  return (
    <Link href={url} target={target} rel={rel} scroll={false}>
      <CustomButton
        color={color}
        width={width}
        size={size}
        disabled={disabled}
        className={className}
      >
        {children}
      </CustomButton>
    </Link>
  );
};
