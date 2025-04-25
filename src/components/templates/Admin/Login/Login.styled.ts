"use client";

import { Container } from "@Atoms/Container";
import { GRAY2, INDIGO } from "@Styles/colors";
import styled from "styled-components";

export const LoginContainer = styled(Container)`
  flex: 1;
  //   height: calc(100vh - 64px);
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled(Container)`
  width: 360px;
  align-items: center;
`;

export const LoginFormTextContainer = styled(Container)`
  width: 100%;
  align-items: center;
`;

export const LoginFormInputContainer = styled(Container)`
  width: 100%;
  align-items: center;
  gap: 8px;

  & input {
    width: 280px;
    border: 1px solid ${GRAY2};
    padding: 16px;
    font-size: 14px;
  }
`;
