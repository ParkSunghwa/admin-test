import styled, { css } from "styled-components";

import { Box } from "@Atoms/Box";
import { Color, getColor, GRAY3, GRAY4 } from "@Styles/colors";

export const CheckBoxContainer = styled(Box)<{
  $width?: string;
  $checked?: boolean;
  $noBackground?: boolean;
}>`
  align-items: center;
  border-radius: 8px;
  height: 56px;
  width: ${({ $width }) => $width ?? "100%"};
  ${({ $noBackground }) =>
    $noBackground &&
    css`
      height: fit-content;
      background: none;
    `}
`;

export const CheckBoxLabelText = styled.div<{
  $labelSize?: string;
  $labelColor?: Color;
  $checked?: boolean;
}>`
  margin-left: 2px;
  ${({ $labelSize }) => $labelSize || "14px"}
  color: ${({ $labelColor }) => ($labelColor ? getColor($labelColor) : GRAY4)};
`;

export const Label = styled.label``;

export const CheckBoxInput = styled.input<{ $noBackground?: boolean }>`
  display: none;
  & + ${Label} {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 16px;
    border-radius: 8px;
    ${({ $noBackground }) => $noBackground && "padding: 0px;"}
  }
  &:not(:checked) + ${Label} .base-checkbox {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  &:checked + ${Label} .base-checkbox {
    &:before {
    }
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  &:disabled + ${Label} {
    opacity: 0.4;
    :active {
      background: none;
    }
  }
`;

export const BaseCheckBox = styled.div<{
  $isAll?: boolean;
  $noBackground?: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  position: relative;
  // Box Style
  &:before {
    content: "";
    display: flex;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    border: 2px solid ${GRAY3};
    border-radius: 2px;
  }
  // Check Style
  &:after {
    ${({ $isAll }) => ($isAll ? `content: '\u2013'` : `content: '\u2713'`)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: 16px;
    height: 16px;
    font-size: 12px !important;
    font-weight: 600;
    color: ${GRAY3} !important;
    transition: all 100ms;
  }
`;
