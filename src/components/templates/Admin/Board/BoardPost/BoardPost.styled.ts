"use client";

import styled from "styled-components";
import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";

export const BoardPostContainer = styled(RowContainer)`
  justify-content: start;
  gap: 32px;
`;

export const BoardPostContent = styled(Container)`
  flex: 1;
  gap: 32px;
  align-items: start;
`;
