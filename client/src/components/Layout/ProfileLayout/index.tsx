import { FC } from "react";
import { useUserState } from "../../../hooks/states/useUserState";
import { ButtonComponent } from "../../Common/Button";
import { StyledProfileLayout } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { colorsModule } from "../../../styles/colors";
import useModal from "../../../hooks/useModal";
import ProfileEditForm from "../../Profile/ProfileEditForm";

interface LayoutProps {}

const ProfileLayout: FC<LayoutProps> = ({ children }) => {
  const { me, userInfo } = useUserState();

  const { ModalPortal, openModal } = useModal({ position: "center" });

  return (
    <StyledProfileLayout>
      <ModalPortal>
        <ProfileEditForm />
      </ModalPortal>
      <header className="profile-header">
        <h1>{userInfo?.name}님의 프로필</h1>
        {me?.user_id === userInfo?.user_id && (
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
        )}
      </header>
      {children}
    </StyledProfileLayout>
  );
};

export default ProfileLayout;
