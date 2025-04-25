import { css } from "styled-components";
import { GRAY1, GRAY2, GRAY3, INDIGO, MAGENTA, WHITE } from "./colors";

export const INDIGO_BACKGROUND = css`
  background-color: ${INDIGO};
`;

export const MAGENTA_BACKGROUND = css`
  background-color: ${MAGENTA};
`;

export const GRAY1_BACKGROUND = css`
  background-color: ${GRAY1};
`;

export const GRAY2_BACKGROUND = css`
  background-color: ${GRAY2};
`;

export const GRAY3_BACKGROUND = css`
  background-color: ${GRAY3};
`;

export const WHITE_BACKGROUND = css`
  background-color: ${WHITE};
`;

export const TEXT_ELLIPSIS = css`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TEXT_HIDDEN = css`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: hidden;
`;
// line clamp에 변수를 넣을 수 있다면!
export const TEXT_ELLIPSIS_LINE_CLAMP_3 = css`
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ABSOLUTE_CENTER = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ABSOLUTE_COVER = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
