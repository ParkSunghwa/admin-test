"use client";

import { Box } from "@Atoms/Box";
import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import { GRAY2 } from "@Styles/colors";
import { ABSOLUTE_COVER, INDIGO_BACKGROUND } from "@Styles/themes";
import styled, { css, keyframes } from "styled-components";

export const SideNavigationContainer = styled(Container)`
  width: 250px;
  min-height: 100vh;
  ${INDIGO_BACKGROUND}
`;

export const SideNavigationTitle = styled(Container)`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${GRAY2};
  align-items: center;
  justify-content: center;
`;

export const SideNavigationMenuList = styled(Container)`
  width: 100%;
  padding-top: 40px;
`;

export const SideNavigationMenu = styled(Container)`
  width: 100%;
`;

export const SideNavigationMenuTitle = styled(RowContainer)<{ $isActive: boolean }>`
  width: 100%;
  height: 64px;
  align-items: center;
  padding-left: 40px;
  justify-content: start;
  cursor: pointer;
  position: relative;
  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        display: block;
        content: "";
        background-color: rgba(255, 255, 255, 0.1);
        ${ABSOLUTE_COVER}
      }
    `}
`;

export const SideNavigationMenuIconBox = styled(Box)`
  flex: 1;
  justify-content: end;
  padding-right: 32px;
`;

const showSubmenu = keyframes`
    0%{
          max-height: 0;
    }
    100%{
          max-height: 100px;
    }
`;

const hideSubMenu = keyframes`
    0%{
          max-height: 100px;
}
100%{
          max-height: 0;
}`;

export const SideNavigationSubMenuList = styled(Container)<{ $isActive: boolean }>`
  width: 100%;
  overflow: hidden;
  ${({ $isActive }) =>
    $isActive
      ? css`
          max-height: 100px;
          animation: ${showSubmenu} 0.5s ease-in;
        `
      : css`
          max-height: 0;
          animation: ${hideSubMenu} 0.5s ease-out;
        `}
`;

export const SideNavigationSubMenu = styled(Container)`
  width: 100%;
  cursor: pointer;
  align-items: start;
  padding-left: 76px;
  padding-top: 16px;
  & span:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;
