"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { UserListContainer, UserListContent } from "./UserList.styled";
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

export const UserListTemplate = () => {
  const [checkedIds, setCheckedIds] = useState<CheckBoxValue[]>([]);
  return (
    <MainLayout
      title="회원리스트"
      subTitle="전체"
    >
      <UserListContainer>
        <UserListContent>
          <TableContainer>
            <TableColGroup>
              <TableCol $width="80px" />
              <TableCol $width="80px" />
              <TableCol $width="80px" />
              <TableCol $width="180px" />
              <TableCol $width="180px" />
              <TableCol $width="180px" />
              <TableCol $width="140px" />
              <TableCol $width="140px" />
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
                  <Text color="gray4">ID</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">이름</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">연락처</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">이메일</Text>
                </TableHeadTitle>
                <TableHeadTitle>
                  <Text color="gray4">등록일</Text>
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
                  <Text>id1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>유저1</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>010-1234-5678</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>dummy@dummy.com</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2024-12-20</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button>수정</Button>
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
                  <Text>id2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>유저2</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>010-8765-4321</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>test@test.com</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Text>2025-03-01</Text>
                </TableBodyDatum>
                <TableBodyDatum>
                  <Button>수정</Button>
                </TableBodyDatum>
              </TableRow>
            </TableBody>
          </TableContainer>
          <MultipleButtonContainer>
            <Button backgroundColor={GRAY5}>선택삭제</Button>
          </MultipleButtonContainer>
        </UserListContent>
      </UserListContainer>
    </MainLayout>
  );
};
