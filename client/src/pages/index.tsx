import React from "react";
import { ButtonComponent } from "../components/Common/Button";
import { StyledHomeLayout } from "../components/Home/HomeLayout/styles";
import { StyledWelcome } from "../components/Home/Welcome/styles";

const MainPage = () => {
  return (
    <StyledHomeLayout>
      <StyledWelcome>
        Welcome, <span className="special">HLOG</span>
      </StyledWelcome>
      <ButtonComponent>시작하기</ButtonComponent>
    </StyledHomeLayout>
  );
};

export default MainPage;
