"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { PopupContainer, PopupContent } from "./Popup.styled";
import { Index } from "@Organisms/Index/Index";
import { MultipleButtonContainer } from "@Atoms/Button/Button.styled";
import { Button } from "@Atoms/Button/Button";
import { GRAY4, GRAY5, INDIGO, MAGENTA } from "@Styles/colors";
import { TableBody, TableCol, TableColGroup, TableContainer, TableHead, TableRow } from "@Organisms/Table/Table.styled";
import { CheckBox } from "@Atoms/CheckBox";
import { useState } from "react";
import { CheckBoxValue } from "@Atoms/CheckBox/CheckBox";
import { Text } from "@Atoms/Typography";
import { TableBodyDatum, TableHeadTitle } from "@Organisms/Table/Table";

export const PopupTemplate = () => {
  const [checkedIds, setCheckedIds] = useState<CheckBoxValue[]>([]);
  return (
    <MainLayout
      title="팝업관리"
      subTitle="전체"
    >
      <PopupContainer>
        <PopupContent>
          <TableContainer>
            <TableColGroup>
              <TableCol $width="60px" />
              <TableCol $width="60px" />
              <TableCol $width="320px" />
              <TableCol $width="240px" />
              <TableCol $width="160px" />
            </TableColGroup>
            <TableHead>
              <TableRow>
                <TableHeadTitle>
                  <CheckBox
                    width="fit-content"
                    value="all"
                    checkedSet={checkedIds}
                    setCheckedSet={setCheckedIds}
                    isAll
                    allValues={["1", "2"]}
                    noBackground
                  />
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">NO</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">팝업명</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">상태</Text>
                </TableHeadTitle>
                <TableHeadTitle />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyDatum>
                  <CheckBox
                    width="fit-content"
                    value="1"
                    checkedSet={checkedIds}
                    setCheckedSet={setCheckedIds}
                    noBackground
                  />
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>팝업1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button>보임</Button>
                </TableBodyDatum>
                <TableBodyDatum>
                  <MultipleButtonContainer>
                    <Button backgroundColor={GRAY5}>미리보기</Button>
                    <Button backgroundColor={MAGENTA}>수정하기</Button>
                  </MultipleButtonContainer>
                </TableBodyDatum>
              </TableRow>
              <TableRow>
                <TableBodyDatum>
                  <CheckBox
                    width="fit-content"
                    value="2"
                    checkedSet={checkedIds}
                    setCheckedSet={setCheckedIds}
                    noBackground
                  />
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>팝업2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button>보임</Button>
                </TableBodyDatum>
                <TableBodyDatum>
                  <MultipleButtonContainer>
                    <Button backgroundColor={GRAY5}>미리보기</Button>
                    <Button backgroundColor={MAGENTA}>수정하기</Button>
                  </MultipleButtonContainer>
                </TableBodyDatum>
              </TableRow>
            </TableBody>
          </TableContainer>
          <MultipleButtonContainer>
            <Button backgroundColor={GRAY5}>선택삭제</Button>
            <Button backgroundColor={MAGENTA}>팝업추가</Button>
          </MultipleButtonContainer>
        </PopupContent>
      </PopupContainer>
    </MainLayout>
  );
};
