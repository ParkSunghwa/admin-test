"use client";

import { Text } from "@Atoms/Typography";
import { IndexContainer, IndexMenu, IndexMenuTitle, IndexSubMenu, IndexSubMenuList } from "./Index.styled";
import { Gap } from "@Styles/App.styled";

interface IndexProps {}

export const Index = ({}: IndexProps) => {
  return (
    <IndexContainer>
      <IndexMenu>
        <IndexMenuTitle>
          <Text size="16px">목차 1</Text>
        </IndexMenuTitle>
        <IndexSubMenuList>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차1</Text>
          </IndexSubMenu>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차2</Text>
          </IndexSubMenu>
        </IndexSubMenuList>
      </IndexMenu>
      <IndexMenu>
        <IndexMenuTitle>
          <Text size="16px">목차 2</Text>
        </IndexMenuTitle>
        <IndexSubMenuList>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차1</Text>
          </IndexSubMenu>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차2</Text>
          </IndexSubMenu>
        </IndexSubMenuList>
      </IndexMenu>
      <IndexMenu>
        <IndexMenuTitle>
          <Text size="16px">목차 3</Text>
        </IndexMenuTitle>
        <IndexSubMenuList>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차1</Text>
          </IndexSubMenu>
          <IndexSubMenu>
            <Text color="gray4">&#8627;</Text>
            <Gap $width="16px" />
            <Text>소 목차2</Text>
          </IndexSubMenu>
        </IndexSubMenuList>
      </IndexMenu>
    </IndexContainer>
  );
};
