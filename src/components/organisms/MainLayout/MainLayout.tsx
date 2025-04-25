"use client";

import { ReactNode, RefObject } from "react";
import { MainLayoutChildren, MainLayoutContainer, MainLayoutSide, MainLayoutTitleContainer } from "./MainLayout.styled";
import { SideNavigation } from "@Organisms/SideNavigation/SideNavigation";
import { TopNavigation } from "@Organisms/TopNavigation/TopNavigation";
import { GRAY1 } from "@Styles/colors";
import { Text } from "@Atoms/Typography";

interface MainLayoutProps {
  children: ReactNode;
  width?: string;
  padding?: string;
  title?: string;
  backgroundColor?: string;
  hideSideNavigation?: boolean;
  hideTopNavigation?: boolean;
  //   layoutRef?: RefObject<HTMLDivElement>;
}

export const MainLayout = ({ children, hideSideNavigation, hideTopNavigation, backgroundColor, title }: MainLayoutProps) => {
  return (
    <MainLayoutContainer>
      {!hideSideNavigation && <SideNavigation />}
      <MainLayoutSide>
        {!hideTopNavigation && <TopNavigation />}
        <MainLayoutChildren $backgroundColor={backgroundColor || GRAY1}>
          {title && (
            <MainLayoutTitleContainer>
              <Text
                size="24px"
                color="indigo"
                weight="bold"
              >
                {title}
              </Text>
            </MainLayoutTitleContainer>
          )}
          {children}
        </MainLayoutChildren>
      </MainLayoutSide>
    </MainLayoutContainer>
  );
};
