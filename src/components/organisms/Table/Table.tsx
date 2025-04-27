import { ReactNode } from "react";
import { TableBodyDatumWrap, TableHeadTitleWrap } from "./Table.styled";

interface TableHeadTitleProps {
  width?: string;
  children?: ReactNode;
}

export const TableHeadTitle = ({ width, children }: TableHeadTitleProps) => {
  return (
    <TableHeadTitleWrap $width={width}>
      <div>{children}</div>
    </TableHeadTitleWrap>
  );
};

interface TableBodyDatumProps {
  width?: string;
  children?: ReactNode;
}

export const TableBodyDatum = ({ width, children }: TableBodyDatumProps) => {
  return (
    <TableBodyDatumWrap $width={width}>
      <div>{children}</div>
    </TableBodyDatumWrap>
  );
};
