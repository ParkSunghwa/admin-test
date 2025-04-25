"use client";

import { MainLayout } from "@Organisms/MainLayout/MainLayout";
import { LoginContainer, LoginForm, LoginFormInputContainer, LoginFormTextContainer } from "./Login.styled";
import { Text } from "@Atoms/Typography";
import { Gap } from "@Styles/App.styled";
import { Button } from "@Atoms/Button/Button";
import { INDIGO } from "@Styles/colors";
import { useRouter } from "next/navigation";

export const LoginTemplate = () => {
  const router = useRouter();
  return (
    <MainLayout
      hideSideNavigation
      hideTopNavigation
    >
      <LoginContainer>
        <LoginForm>
          <LoginFormTextContainer>
            <Text
              size="40px"
              color="indigo"
            >
              LOGIN
            </Text>
            <Text
              size="18px"
              color="indigo"
            >
              Administrator에 오신 것을 환영합니다.
            </Text>
          </LoginFormTextContainer>
          <Gap $height="32px" />
          <LoginFormInputContainer>
            <input />
            <input type="password" />
          </LoginFormInputContainer>
          <Gap $height="16px" />
          <Button
            width="280px"
            height="64px"
            backgroundColor={INDIGO}
            fontColor="white"
            fontSize="18px"
            fontWeight="bold"
            onClick={() => router.push("/admin/menu/navigation")}
          >
            로그인
          </Button>
        </LoginForm>
      </LoginContainer>
    </MainLayout>
  );
};
