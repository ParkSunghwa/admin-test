"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { NavigationContainer, NavigationRight } from "./Navigation.styled";
import { Index } from "@Organisms/Index/Index";
import { List } from "@Organisms/List/List";
import { MultipleButtonContainer } from "@Atoms/Button/Button.styled";
import { Button } from "@Atoms/Button/Button";
import { INDIGO, MAGENTA } from "@Styles/colors";

export const NavigationTemplate = () => {
  return (
    <MainLayout title="항목명">
      <NavigationContainer>
        <Index />
        <NavigationRight>
          <List />
          <MultipleButtonContainer>
            <Button
              backgroundColor={MAGENTA}
              fontColor="white"
              fontWeight="bold"
            >
              선택삭제
            </Button>
            <Button
              backgroundColor={INDIGO}
              fontColor="white"
              fontWeight="bold"
            >
              항목추가
            </Button>
          </MultipleButtonContainer>
        </NavigationRight>
      </NavigationContainer>
    </MainLayout>
  );
};
