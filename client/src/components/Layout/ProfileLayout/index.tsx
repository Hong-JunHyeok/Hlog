import { FC } from "react";
import { useUserState } from "../../../hooks/states/useUserState";
import { ButtonComponent } from "../../Common/Button";
import { StyledProfileLayout } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { colorsModule } from "../../../styles/colors";

interface LayoutProps {
  openModal: () => void;
}

const ProfileLayout: FC<LayoutProps> = ({ children, openModal }) => {
  const { me } = useUserState();

  return (
    <StyledProfileLayout>
      <header className="profile-header">
        <h1>{me?.name}님의 프로필</h1>
        <ButtonComponent
          handleFunc={openModal}
          customStyle={{
            width: "150px",
            background: colorsModule.hlog_dark_1,
            color: "white",
          }}
        >
          <AiOutlineEdit />
          <span>내 정보 수정</span>
        </ButtonComponent>
      </header>
      {children}
    </StyledProfileLayout>
  );
};

export default ProfileLayout;
