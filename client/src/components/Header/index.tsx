import { css } from "@emotion/react";
import { CSSProperties, FC } from "react";
import { useLink } from "../../hooks/useLink";
import { colorsModule } from "../../styles/colors";
import { ButtonComponent } from "../Common/Button";
import { StyledHeader } from "./styles";

const buttonCustomStyle: CSSProperties = {
  marginLeft: "50px",
  width: "100px",
};

const HeaderComponent: FC = ({ children }) => {
  const { handlePushLink: pushMainPage } = useLink("/");
  const { handlePushLink: pushLoginPage } = useLink("/auth/login");

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo special" onClick={pushMainPage}>
          HLOG
        </div>
        <ul className="menus">
          <li>포스트</li>
          <li>프로필</li>
          <ButtonComponent
            buttonColor={colorsModule.hlog_blue}
            customStyle={buttonCustomStyle}
            handleFunc={pushLoginPage}
          >
            로그인
          </ButtonComponent>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default HeaderComponent;
