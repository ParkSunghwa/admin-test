"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { NavigationContainer, NavigationContent } from "./Navigation.styled";
import { Index } from "@Organisms/Index/Index";
import { MultipleButtonContainer } from "@Atoms/Button/Button.styled";
import { Button } from "@Atoms/Button/Button";
import { INDIGO, MAGENTA } from "@Styles/colors";
import { TableContainer, TableHead, TableHeadTitle, TableRow } from "@Organisms/Table/Table.styled";

export const NavigationTemplate = () => {
  return (
    <MainLayout title="메뉴관리">
      <NavigationContainer>
        <Index />
        <NavigationContent>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableHeadTitle></TableHeadTitle>
                <TableHeadTitle>NO</TableHeadTitle>
                <TableHeadTitle>메뉴명</TableHeadTitle>
                <TableHeadTitle>TYPE</TableHeadTitle>
                <TableHeadTitle>정렬</TableHeadTitle>
                <TableHeadTitle>상태</TableHeadTitle>
                <TableHeadTitle></TableHeadTitle>
              </TableRow>
            </TableHead>
          </TableContainer>
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
        </NavigationContent>
      </NavigationContainer>
    </MainLayout>
  );
};
