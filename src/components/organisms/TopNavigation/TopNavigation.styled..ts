"use client";

import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import styled from "styled-components";

export const TopNavigationContainer = styled(RowContainer)`
  height: 80px;
  justify-content: end;
  align-items: center;
  gap: 16px;
  padding-right: 16px;
  & span:first-child {
    cursor: pointer;
  }
  & span:last-child {
    cursor: pointer;
  }
`;
