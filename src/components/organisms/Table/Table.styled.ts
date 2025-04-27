"use client";

import { GRAY2, GRAY3 } from "@Styles/colors";
import { WHITE_BACKGROUND } from "@Styles/themes";
import styled from "styled-components";

export const TableContainer = styled.table`
  min-width: 100%;
  width: fit-content;
`;

export const TableColGroup = styled.colgroup``;

export const TableCol = styled.col<{ $width?: string }>`
  width: ${({ $width }) => $width || "auto"};
`;

export const TableRow = styled.tr``;

export const TableHead = styled.thead`
  border-top: 1px solid ${GRAY3};
  border-bottom: 1px solid ${GRAY2};
  ${WHITE_BACKGROUND}
`;

export const TableHeadTitleWrap = styled.th<{ $width?: string }>`
  padding: 16px 8px;
  width: ${({ $width }) => $width || "auto"};
  & > div {
    display: flex;
    align-itmes: center;
    justify-content: center;
  }
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid ${GRAY2};
`;

export const TableBodyDatumWrap = styled.td<{ $width?: string }>`
  padding: 16px 8px;
  width: ${({ $width }) => $width || "auto"};
  & > div {
    display: flex;
    align-itmes: center;
    justify-content: center;
  }
`;
