"use client";

import { Text } from "@Atoms/Typography";
import { SideNavigationContainer, SideNavigationMenu, SideNavigationMenuList, SideNavigationSubMenu, SideNavigationSubMenuList, SideNavigationTitle, SideNavigationMenuTitle, SideNavigationMenuIconBox } from "./SideNavigation.styled.";
import Image from "next/image";
import { Gap } from "@Styles/App.styled";
import { useCallback, useState } from "react";
import { AppImage, UserImage } from "@Images";
import { CaretDownIcon, CaretUpIcon } from "@Icons";
import { WHITE } from "@Styles/colors";
import { useRouter } from "next/navigation";

interface SideNavigationProps {}

export const SideNavigation = ({}: SideNavigationProps) => {
  const router = useRouter();
  const [activatedMenu, setActivatedMenu] = useState("");

  const toggleActivatedMenu = useCallback(
    (menu: string) => {
      setActivatedMenu(activatedMenu === menu ? "" : menu);
    },
    [activatedMenu]
  );
  return (
    <SideNavigationContainer>
      <SideNavigationTitle>
        <Text
          color="gray3"
          size="20px"
        >
          ADMINISTRATOR
        </Text>
      </SideNavigationTitle>
      <SideNavigationMenuList>
        <SideNavigationMenu>
          <SideNavigationMenuTitle
            onClick={() => toggleActivatedMenu("menu")}
            $isActive={activatedMenu === "menu"}
          >
            <Image
              src={AppImage}
              alt="menu"
              width={28}
              height={28}
            />
            <Gap $width="8px" />
            <Text
              size="16px"
              color="white"
            >
              메뉴관리
            </Text>
            <SideNavigationMenuIconBox>
              {activatedMenu === "menu" ? (
                <CaretUpIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              ) : (
                <CaretDownIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              )}
            </SideNavigationMenuIconBox>
          </SideNavigationMenuTitle>
          <SideNavigationSubMenuList $isActive={activatedMenu === "menu"}>
            <SideNavigationSubMenu onClick={() => router.push("/admin/menu/navigation")}>
              <Text
                color="white"
                size="14px"
              >
                메뉴관리
              </Text>
            </SideNavigationSubMenu>
            <SideNavigationSubMenu onClick={() => router.push("/admin/menu/footer")}>
              <Text
                color="white"
                size="14px"
              >
                푸터관리
              </Text>
            </SideNavigationSubMenu>
          </SideNavigationSubMenuList>
        </SideNavigationMenu>
        <SideNavigationMenu>
          <SideNavigationMenuTitle
            onClick={() => toggleActivatedMenu("user")}
            $isActive={activatedMenu === "user"}
          >
            <Image
              src={UserImage}
              alt="user"
              width={28}
              height={28}
            />
            <Gap $width="8px" />
            <Text
              size="16px"
              color="white"
            >
              회원관리
            </Text>
            <SideNavigationMenuIconBox>
              {activatedMenu === "user" ? (
                <CaretUpIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              ) : (
                <CaretDownIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              )}
            </SideNavigationMenuIconBox>
          </SideNavigationMenuTitle>
          <SideNavigationSubMenuList $isActive={activatedMenu === "user"}>
            <SideNavigationSubMenu onClick={() => router.push("/admin/user/list")}>
              <Text
                color="white"
                size="14px"
              >
                회원리스트
              </Text>
            </SideNavigationSubMenu>
          </SideNavigationSubMenuList>
        </SideNavigationMenu>
        <SideNavigationMenu>
          <SideNavigationMenuTitle
            onClick={() => toggleActivatedMenu("board")}
            $isActive={activatedMenu === "board"}
          >
            <Image
              src={AppImage}
              alt="board"
              width={28}
              height={28}
            />
            <Gap $width="8px" />
            <Text
              size="16px"
              color="white"
            >
              게시판관리
            </Text>
            <SideNavigationMenuIconBox>
              {activatedMenu === "board" ? (
                <CaretUpIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              ) : (
                <CaretDownIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              )}
            </SideNavigationMenuIconBox>
          </SideNavigationMenuTitle>
          <SideNavigationSubMenuList $isActive={activatedMenu === "board"}>
            <SideNavigationSubMenu onClick={() => router.push("/admin/board")}>
              <Text
                color="white"
                size="14px"
              >
                게시판관리
              </Text>
            </SideNavigationSubMenu>
            <SideNavigationSubMenu onClick={() => router.push("/admin/board/post")}>
              <Text
                color="white"
                size="14px"
              >
                게시물관리
              </Text>
            </SideNavigationSubMenu>
          </SideNavigationSubMenuList>
        </SideNavigationMenu>
        <SideNavigationMenu>
          <SideNavigationMenuTitle
            onClick={() => toggleActivatedMenu("inquiry")}
            $isActive={activatedMenu === "inquiry"}
          >
            <Image
              src={UserImage}
              alt="inquiry"
              width={28}
              height={28}
            />
            <Gap $width="8px" />
            <Text
              size="16px"
              color="white"
            >
              문의관리
            </Text>
            <SideNavigationMenuIconBox>
              {activatedMenu === "inquiry" ? (
                <CaretUpIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              ) : (
                <CaretDownIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              )}
            </SideNavigationMenuIconBox>
          </SideNavigationMenuTitle>
          <SideNavigationSubMenuList $isActive={activatedMenu === "inquiry"}>
            <SideNavigationSubMenu onClick={() => router.push("/admin/inquiry/list")}>
              <Text
                color="white"
                size="14px"
              >
                문의리스트
              </Text>
            </SideNavigationSubMenu>
          </SideNavigationSubMenuList>
        </SideNavigationMenu>
        <SideNavigationMenu>
          <SideNavigationMenuTitle
            onClick={() => toggleActivatedMenu("addition")}
            $isActive={activatedMenu === "addition"}
          >
            <Image
              src={AppImage}
              alt="addition"
              width={28}
              height={28}
            />
            <Gap $width="8px" />
            <Text
              size="16px"
              color="white"
            >
              부가서비스관리
            </Text>
            <SideNavigationMenuIconBox>
              {activatedMenu === "addition" ? (
                <CaretUpIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              ) : (
                <CaretDownIcon
                  width="14px"
                  height="14px"
                  color={WHITE}
                />
              )}
            </SideNavigationMenuIconBox>
          </SideNavigationMenuTitle>
          <SideNavigationSubMenuList $isActive={activatedMenu === "addition"}>
            <SideNavigationSubMenu onClick={() => router.push("/admin/addition/popup")}>
              <Text
                color="white"
                size="14px"
              >
                팝업관리
              </Text>
            </SideNavigationSubMenu>
          </SideNavigationSubMenuList>
        </SideNavigationMenu>
      </SideNavigationMenuList>
    </SideNavigationContainer>
  );
};
