"use client";

import { GRAY2, GRAY3 } from "@Styles/colors";
import { WHITE_BACKGROUND } from "@Styles/themes";
import styled from "styled-components";

export const TableContainer = styled.table`
  min-width: 100%;
  width: fit-content;
`;

export const TableColGroup = styled.colgroup``;

export const TableCol = styled.col<{ $width?: string }>``;

export const TableRow = styled.tr``;

export const TableHead = styled.thead`
  border-top: 1px solid ${GRAY3};
  border-bottom: 1px solid ${GRAY2};
  ${WHITE_BACKGROUND}
`;

export const TableHeadTitle = styled.th<{ $width?: string }>`
  padding: 16px;
  width: ${({ $width }) => $width || "auto"};
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid ${GRAY2};
`;

export const TableBodyDatum = styled.td<{ $width?: string }>`
  padding: 16px;
  width: ${({ $width }) => $width || "auto"};
`;
