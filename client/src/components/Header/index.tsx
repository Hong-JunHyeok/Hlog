import { FC } from "react";
import { StyledHeader } from "./styles";

const HeaderComponent: FC = ({ children }) => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="logo">HLOG</div>
        <ul className="menus">
          <li>홈</li>
          <li>프로필</li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default HeaderComponent;
