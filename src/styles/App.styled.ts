"use client";

import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  min-width: 1420px;
  min-height: 100vh;
  overflow: hidden;
`;

export const Gap = styled.div<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width};
  min-width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  min-height: ${({ $height }) => $height};
`;

export const Wrap = styled.div<{ $column?: boolean; $width?: string; $height?: string }>`
  display: flex;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};
  flex-wrap: wrap;
  width: ${({ $width }) => $width || "fit-content"};
  height: ${({ $height }) => $height || "auto"};
`;
