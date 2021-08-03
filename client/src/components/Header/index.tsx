import { CSSProperties, useCallback, VFC } from "react";
import { useDispatch } from "react-redux";
import { useUserDispatch } from "../../hooks/dispatches/useUserDispatch";
import { useUserState } from "../../hooks/states/useUserState";
import { useLink } from "../../hooks/useLink";
import { logInAction } from "../../modules/user/actions";
import { colorsModule } from "../../styles/colors";
import { ButtonComponent } from "../Common/Button";
import { StyledHeader } from "./styles";

const buttonCustomStyle: CSSProperties = {
  marginLeft: "50px",
  width: "100px",
};

const HeaderComponent: VFC = () => {
  const { isLoggedIn } = useUserState();
  const { dispatchLogOut } = useUserDispatch();

  const { handlePushLink: pushMainPage } = useLink("/");
  const { handlePushLink: pushLoginPage } = useLink("/auth/login");

  const { handlePushLink: pushPostPage } = useLink("/post");
  const { handlePushLink: pushProfilePage } = useLink("/profile");

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo special" onClick={pushMainPage}>
          HLOG
        </div>
        <ul className="menus">
          <li onClick={pushPostPage}>포스트</li>
          <li onClick={pushProfilePage}>프로필</li>
          {isLoggedIn ? (
            <ButtonComponent
              handleFunc={dispatchLogOut}
              customStyle={buttonCustomStyle}
            >
              로그아웃
            </ButtonComponent>
          ) : (
            <ButtonComponent
              buttonColor={colorsModule.hlog_blue}
              customStyle={buttonCustomStyle}
              handleFunc={pushLoginPage}
            >
              로그인
            </ButtonComponent>
          )}
        </ul>
      </div>
    </StyledHeader>
  );
};

export default HeaderComponent;
