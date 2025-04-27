"use client";

import { Text } from "@Atoms/Typography";
import { SideNavigationContainer, SideNavigationMenu, SideNavigationMenuList, SideNavigationSubMenu, SideNavigationSubMenuList, SideNavigationTitle, SideNavigationMenuTitle, SideNavigationMenuIconBox } from "./SideNavigation.styled.";
import Image from "next/image";
import { Gap } from "@Styles/App.styled";
import { useCallback, useState } from "react";
import { AppImage, UserImage } from "@Images";
import { CaretDownIcon, CaretUpIcon } from "@Icons";
import { WHITE } from "@Styles/colors";
import { usePathname, useRouter } from "next/navigation";

interface SideNavigationProps {}

export const SideNavigation = ({}: SideNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

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
            <SideNavigationSubMenu onClick={!pathname.includes("/menu/navigation") ? () => router.push("/admin/menu/navigation") : undefined}>
              <Text
                color="white"
                size="14px"
              >
                메뉴관리
              </Text>
            </SideNavigationSubMenu>
            <SideNavigationSubMenu onClick={!pathname.includes("/menu/footer") ? () => router.push("/admin/menu/footer") : undefined}>
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
            <SideNavigationSubMenu onClick={!pathname.includes("/user/list") ? () => router.push("/admin/user/list") : undefined}>
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
            <SideNavigationSubMenu onClick={!pathname.includes("/board/list") ? () => router.push("/admin/board/list") : undefined}>
              <Text
                color="white"
                size="14px"
              >
                게시판관리
              </Text>
            </SideNavigationSubMenu>
            <SideNavigationSubMenu onClick={!pathname.includes("/board/post") ? () => router.push("/admin/board/post") : undefined}>
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
            <SideNavigationSubMenu onClick={!pathname.includes("/inquiry/list") ? () => router.push("/admin/inquiry/list") : undefined}>
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
            <SideNavigationSubMenu onClick={!pathname.includes("/addtion/popup") ? () => router.push("/admin/addition/popup") : undefined}>
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
