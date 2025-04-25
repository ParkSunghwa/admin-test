"use client";

import { Text } from "@Atoms/Typography";
import { TopNavigationContainer } from "./TopNavigation.styled.";

interface TopNavigationProps {}

export const TopNavigation = ({}: TopNavigationProps) => {
  return (
    <TopNavigationContainer>
      <Text size="12px">로그아웃</Text>
      <Text size="12px">|</Text>
      <Text size="12px">관리자 님</Text>
    </TopNavigationContainer>
  );
};
