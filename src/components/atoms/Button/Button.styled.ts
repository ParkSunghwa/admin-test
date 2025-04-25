"use client";

import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import { Color, getColor, INDIGO } from "@Styles/colors";
import { ABSOLUTE_COVER } from "@Styles/themes";
import styled from "styled-components";

export const BaseButton = styled.button<{ $width?: string; $height?: string; $padding?: string; $backgroundColor?: string; $fontSize?: string; $fontColor?: Color; $fontWeight?: string }>`
  border: none;
  cursor: pointer;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ $fontColor }) => getColor($fontColor)};
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  width: ${({ $width }) => $width || "fit-content"};
  min-width: fit-content;
  height: ${({ $height }) => $height || "auto"};
  min-height: fit-content;
  padding: ${({ $padding }) => $padding || "8px 32px"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || INDIGO};

  position: relative;
  overflow: hidden;

  &:active:after {
    content: "";
    ${ABSOLUTE_COVER}
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const ButtonChildren = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MultipleButtonContainer = styled(RowContainer)<{ $width?: string }>`
  width: ${({ $width }) => $width || "fit-content"};
  gap: 8px;
`;

export const FloatingButtonContainer = styled(Container)<{
  $sticky?: boolean;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}>`
  width: fit-content;
  position: ${({ $sticky }) => ($sticky ? "sticky" : "absolute")};
  z-index: 1;
  ${({ $top }) => $top && `top : ${$top};`}
  ${({ $bottom }) => $bottom && `bottom : ${$bottom};`}
    ${({ $left }) => $left && `left : ${$left};`}
    ${({ $right }) => $right && `right : ${$right};`}
`;
