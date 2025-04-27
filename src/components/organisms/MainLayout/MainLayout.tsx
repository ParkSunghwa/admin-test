"use client";

import { ReactNode, RefObject } from "react";
import { MainLayoutChildren, MainLayoutContainer, MainLayoutSide, MainLayoutSubTitleContainer, MainLayoutTitleContainer } from "./MainLayout.styled";
import { SideNavigation } from "@Organisms/SideNavigation/SideNavigation";
import { TopNavigation } from "@Organisms/TopNavigation/TopNavigation";
import { GRAY1, GRAY2, GRAY3 } from "@Styles/colors";
import { Text } from "@Atoms/Typography";
import { CaretRightIcon } from "@Icons";

interface MainLayoutProps {
  children: ReactNode;
  width?: string;
  padding?: string;
  title?: string;
  subTitle?: string;
  backgroundColor?: string;
  hideSideNavigation?: boolean;
  hideTopNavigation?: boolean;
  //   layoutRef?: RefObject<HTMLDivElement>;
}

export const MainLayout = ({ children, hideSideNavigation, hideTopNavigation, backgroundColor, title, subTitle }: MainLayoutProps) => {
  return (
    <MainLayoutContainer>
      {!hideSideNavigation && <SideNavigation />}
      <MainLayoutSide>
        {!hideTopNavigation && <TopNavigation />}
        <MainLayoutChildren $backgroundColor={backgroundColor || GRAY1}>
          {title && (
            <>
              <MainLayoutSubTitleContainer>
                <Text size="12px">{title}</Text>
                {subTitle && (
                  <>
                    <CaretRightIcon
                      width="12px"
                      height="12px"
                      color={GRAY3}
                    />
                    <Text size="12px">{subTitle}</Text>
                  </>
                )}
              </MainLayoutSubTitleContainer>

              <MainLayoutTitleContainer>
                <Text
                  size="24px"
                  color="indigo"
                  weight="bold"
                >
                  {title}
                </Text>
              </MainLayoutTitleContainer>
            </>
          )}
          {children}
        </MainLayoutChildren>
      </MainLayoutSide>
    </MainLayoutContainer>
  );
};
