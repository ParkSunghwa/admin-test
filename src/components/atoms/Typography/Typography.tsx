import { Color } from "@Styles/colors";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { BaseText } from "./Typography.styled";

const TextDecorationArray = ["overline", "underline", "line-through"] as const;
export type TextDecoration = (typeof TextDecorationArray)[number];

const TextAlignArray = ["center", "left", "right", "justify"] as const;
export type TextAlign = (typeof TextAlignArray)[number];

const WordBreakArray = ["normal", "break-all", "keep-all", "initial", "inherit"] as const;
export type WordBreak = (typeof WordBreakArray)[number];

interface TextProp extends ComponentPropsWithoutRef<"span"> {
  color?: Color;
  textAlign?: TextAlign;
  textDecoration?: TextDecoration;
  size?: string;
  weight?: string;
  customColor?: string;
  wordBreak?: WordBreak;
  children?: ReactNode;
}

export const Text = forwardRef<HTMLSpanElement, TextProp>(({ size, weight, color, textAlign, textDecoration, customColor, wordBreak, children, ...rest }, ref) => {
  return (
    <BaseText
      {...rest}
      ref={ref}
      $size={size}
      $weight={weight}
      $color={color}
      $textAlign={textAlign}
      $textDecoration={textDecoration}
      $customColor={customColor}
      $wordBreak={wordBreak}
    >
      {children}
    </BaseText>
  );
});
Text.displayName = "Text";
