// ICONS FROM react-icons
import {
  FaFacebookF,
  FaLocationDot,
  FaAt,
  FaEnvelope,
  FaArrowDown,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6"; // Font Awesome 6 library
import { AiFillInstagram } from "react-icons/ai"; // Ant Design Icons Library

// ENUM & TYPING
import { IconName } from "./icon.enum";

interface CustomIconProps {
  size: number;
  name: IconName;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const iconComponents = {
  [IconName.At]: FaAt,
  [IconName.Envelope]: FaEnvelope,
  [IconName.Facebook]: FaFacebookF,
  [IconName.Instagram]: AiFillInstagram,
  [IconName.Location]: FaLocationDot,
  [IconName.ArrowDown]: FaArrowDown,
  [IconName.Eye]: FaEye,
  [IconName.EyeClose]: FaEyeSlash,
};

export const CustomIcon = ({ size, name, className, onClick }: CustomIconProps) => {
  const Icon = iconComponents[name];

  return (
    <span className={`${className} ${onClick && "cursor-pointer"}`} onClick={onClick}>
      {Icon ? <Icon size={size} /> : null}
    </span>
  );
};
