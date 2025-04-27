"use client";

import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import styled from "styled-components";

export const MainLayoutContainer = styled(RowContainer)`
  min-height: 100vh;
`;

export const MainLayoutSide = styled(Container)`
  min-height: 100vh;
  flex: 1;
`;

export const MainLayoutChildren = styled(Container)<{ $backgroundColor: string }>`
  padding: 32px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  flex: 1;
`;

export const MainLayoutSubTitleContainer = styled(RowContainer)`
  width: fit-content;
  padding-bottom: 16px;
  align-self: end;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const MainLayoutTitleContainer = styled(Container)`
  width: fit-content;
  padding-bottom: 32px;
  align-self: start;
`;
