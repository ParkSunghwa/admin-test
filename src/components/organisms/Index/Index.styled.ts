"use client";

import { Box } from "@Atoms/Box";
import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import { GRAY1, GRAY2 } from "@Styles/colors";
import { WHITE_BACKGROUND } from "@Styles/themes";
import styled from "styled-components";

export const IndexContainer = styled(Container)`
  width: 250px;
  padding: 16px;
  gap: 16px;
  border: 1px solid ${GRAY2};
  ${WHITE_BACKGROUND}
`;

export const IndexMenu = styled(Container)``;

export const IndexMenuTitle = styled(Box)`
  width: 100%;
  padding: 8px;
  border: 1px solid ${GRAY2};
`;

export const IndexSubMenuList = styled(Container)`
  padding-top: 16px;
  padding-left: 16px;
  gap: 8px;
`;

export const IndexSubMenu = styled(RowContainer)`
  align-items: center;
  justify-content: start;
  cursor: pointer;
`;
