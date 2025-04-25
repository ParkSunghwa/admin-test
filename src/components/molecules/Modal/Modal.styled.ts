import styled from "styled-components";

import { Box } from "@Atoms/Box";
import { WHITE_BACKGROUND } from "@Styles/themes";
import { Container } from "@Atoms/Container";

export const ModalContainer = styled(Box)<{
  $width?: string;
  $height?: string;
}>`
  ${WHITE_BACKGROUND}
  width: 87.5vw;
  max-width: 420px;
  height: ${({ $height }) => $height || "fit-content"};
  max-height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 16px;
  border-radius: 8px;
`;

export const ModalImageBox = styled(Box)`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const ModalChildrenContainer = styled(Container)<{
  $fixedHeight: boolean;
}>`
  width: 100%;
  height: ${({ $fixedHeight }) => ($fixedHeight ? "100%" : "fit-content")};
  max-height: 100%;
`;
