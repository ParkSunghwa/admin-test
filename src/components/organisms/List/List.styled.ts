"use client";

import { Box } from "@Atoms/Box";
import { Container } from "@Atoms/Container";
import { RowContainer } from "@Atoms/RowContainer";
import { GRAY2, GRAY3 } from "@Styles/colors";
import { WHITE_BACKGROUND } from "@Styles/themes";
import styled from "styled-components";

export const ListContainer = styled(Container)`
  flex: 1;
`;

export const ListHead = styled(RowContainer)`
  padding: 16px;
  border-top: 1px solid ${GRAY3};
  border-bottom: 1px solid ${GRAY2};
  ${WHITE_BACKGROUND}
`;

export const ListHeadData = styled(Box)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ListBody = styled(RowContainer)`
  padding: 16px;
  border-bottom: 1px solid ${GRAY2};
`;

export const ListBodyData = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
