"use client";

import { Color, getColor } from "@Styles/colors";
import styled, { css } from "styled-components";
import { TextAlign, TextDecoration, WordBreak } from "./Typography";

export const BaseText = styled.span<{
  $size?: string;
  $weight?: string;
  $color?: Color;
  $textAlign?: TextAlign;
  $textDecoration?: TextDecoration;
  $customSize?: string;
  $customColor?: string;
  $wordBreak?: WordBreak;
}>`
  white-space: pre-line;
  height: fit-content;
  color: ${({ $color }) => getColor($color)};
  font-size: ${({ $size }) => $size || "14px"};
  font-weight: ${({ $weight }) => $weight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  text-decoration: ${({ $textDecoration }) => $textDecoration || "none"};
  word-break: ${({ $wordBreak }) => $wordBreak || "normal"};
  ${({ $customSize }) =>
    $customSize &&
    css`
      font-size: ${`${$customSize}`};
    `}
  ${({ $customColor }) =>
    $customColor &&
    css`
      color: ${`${$customColor}`};
    `}
`;
