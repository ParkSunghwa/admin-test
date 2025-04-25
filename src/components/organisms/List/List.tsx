"use client";

import { Text } from "@Atoms/Typography";
import { ListBody, ListBodyData, ListContainer, ListHead, ListHeadData } from "./List.styled";
import { Button } from "@Atoms/Button/Button";
import { GRAY3, WHITE } from "@Styles/colors";

interface ListProps {}

export const List = ({}: ListProps) => {
  return (
    <ListContainer>
      <ListHead>
        <ListHeadData>
          <Text
            color="gray4"
            weight="bold"
          >
            NO
          </Text>
        </ListHeadData>
        <ListHeadData>
          <Text
            color="gray4"
            weight="bold"
          >
            분류1
          </Text>
        </ListHeadData>
        <ListHeadData>
          <Text
            color="gray4"
            weight="bold"
          >
            분류2
          </Text>
        </ListHeadData>
        <ListHeadData>
          <Text
            color="gray4"
            weight="bold"
          >
            분류3
          </Text>
        </ListHeadData>
        <ListHeadData />
      </ListHead>
      <ListBody>
        <ListBodyData>
          <Text color="gray4">01</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용1</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용2</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용3</Text>
        </ListBodyData>
        <ListBodyData>
          <Button
            backgroundColor={GRAY3}
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            바로가기
          </Button>
          <Button
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            수정하기
          </Button>
        </ListBodyData>
      </ListBody>
      <ListBody>
        <ListBodyData>
          <Text color="gray4">02</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용1</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용2</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용3</Text>
        </ListBodyData>
        <ListBodyData>
          <Button
            backgroundColor={GRAY3}
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            바로가기
          </Button>
          <Button
            fontColor="white"
            fontWeight="bold"
          >
            수정하기
          </Button>
        </ListBodyData>
      </ListBody>
      <ListBody>
        <ListBodyData>
          <Text color="gray4">03</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용1</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용2</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용3</Text>
        </ListBodyData>
        <ListBodyData>
          <Button
            backgroundColor={GRAY3}
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            바로가기
          </Button>
          <Button
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            수정하기
          </Button>
        </ListBodyData>
      </ListBody>
      <ListBody>
        <ListBodyData>
          <Text color="gray4">04</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용1</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용2</Text>
        </ListBodyData>
        <ListBodyData>
          <Text color="gray4">내용3</Text>
        </ListBodyData>
        <ListBodyData>
          <Button
            backgroundColor={GRAY3}
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            바로가기
          </Button>
          <Button
            fontColor="white"
            fontWeight="bold"
            width="fit-content"
            height="auto"
            padding="8px 32px"
          >
            수정하기
          </Button>
        </ListBodyData>
      </ListBody>
    </ListContainer>
  );
};
