"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { InquiryListContainer, InquiryListContent } from "./InquiryList.styled";
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

export const InquiryListTemplate = () => {
  const [checkedIds, setCheckedIds] = useState<CheckBoxValue[]>([]);
  return (
    <MainLayout
      title="문의리스트"
      subTitle="전체"
    >
      <InquiryListContainer>
        <InquiryListContent>
          <TableContainer>
            <TableColGroup>
              <TableCol $width="80px" />
              <TableCol $width="80px" />
              <TableCol $width="180px" />
              <TableCol $width="180px" />
              <TableCol $width="180px" />
              <TableCol $width="180px" />
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
                  <Text color="gray4">기업/기관명</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">이름</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">등록일</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">첨부파일</Text>
                </TableHeadTitle>
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
                  <Text>기관1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>유저1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2024-12-20</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>없음</Text>
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
                  <Text>기업2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>유저2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2024-12-21</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>있음</Text>
                </TableBodyDatum>
              </TableRow>
            </TableBody>
          </TableContainer>
          <MultipleButtonContainer>
            <Button backgroundColor={GRAY5}>선택삭제</Button>
          </MultipleButtonContainer>
        </InquiryListContent>
      </InquiryListContainer>
    </MainLayout>
  );
};
