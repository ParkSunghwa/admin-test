"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { BoardPostContainer, BoardPostContent } from "./BoardPost.styled";
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

export const BoardPostTemplate = () => {
  const [checkedIds, setCheckedIds] = useState<CheckBoxValue[]>([]);
  return (
    <MainLayout
      title="게시물관리"
      subTitle="전체"
    >
      <BoardPostContainer>
        <Index />
        <BoardPostContent>
          <TableContainer>
            <TableColGroup>
              <TableCol $width="0" />
              <TableCol $width="0" />
              <TableCol $width="0" />
              <TableCol $width="200px" />
              <TableCol $width="160px" />
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
                  <Text color="gray4">언어</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">제목</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">작성일</Text>
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
                  <Text>한국어</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>제목1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2024-12-20</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button backgroundColor={INDIGO}>수정하기</Button>
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
                  <Text>ENGLISH</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>title1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2024-12-20</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button backgroundColor={INDIGO}>수정하기</Button>
                </TableBodyDatum>
              </TableRow>
            </TableBody>
          </TableContainer>
          <MultipleButtonContainer>
            <Button backgroundColor={GRAY5}>선택삭제</Button>
            <Button backgroundColor={MAGENTA}>메뉴등록</Button>
          </MultipleButtonContainer>
        </BoardPostContent>
      </BoardPostContainer>
    </MainLayout>
  );
};
