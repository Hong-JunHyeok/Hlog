import { css } from "@emotion/react";
import { CSSProperties, FC } from "react";
import { colorsModule } from "../../styles/colors";
import { ButtonComponent } from "../Common/Button";
import { StyledHeader } from "./styles";

const HeaderComponent: FC = ({ children }) => {
  const buttonCustomStyle: CSSProperties = {
    marginLeft: "50px",
    width: "100px",
  };

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo special">HLOG</div>
        <ul className="menus">
          <li>홈</li>
          <li>프로필</li>
          <ButtonComponent
            buttonColor={colorsModule.hlog_blue}
            customStyle={buttonCustomStyle}
          >
            로그인
          </ButtonComponent>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default HeaderComponent;
