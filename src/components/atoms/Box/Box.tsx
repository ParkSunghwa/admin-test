"use client";

import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { BaseBox } from "./Box.styled";

interface BoxProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children?: ReactNode;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ className, children, ...rest }, ref) => {
  return (
    <BaseBox
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </BaseBox>
  );
});
Box.displayName = "Box";
