import { ComponentPropsWithoutRef, forwardRef } from "react";
import { BaseButton } from "./Button.styled";
import { Color } from "@Styles/colors";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontColor?: Color;
  fontWeight?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, width, height, padding, backgroundColor, fontSize, fontColor, fontWeight, ...rest }, ref) => {
  return (
    <BaseButton
      className={className}
      $width={width}
      $height={height}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $fontColor={fontColor}
      $fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </BaseButton>
  );
});
