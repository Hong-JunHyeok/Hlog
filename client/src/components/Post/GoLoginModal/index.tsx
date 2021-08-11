import { FC } from "react";
import { useLink } from "../../../hooks/useLink";
import { colorsModule } from "../../../styles/colors";
import { ButtonComponent } from "../../Common/Button";
import { GoLoginModalContainer } from "./styles";

interface IProps {
  closeModal: () => void;
}

const GoLoginModal: FC<IProps> = ({ closeModal }) => {
  const { handlePushLink: handlePushLoginPage } = useLink("/auth/login");

  return (
    <GoLoginModalContainer>
      <h1>
        로그인이 필요한 서비스입니다.
        <br />
        <strong>로그인 하시겠습니까?</strong>
      </h1>
      <div className="options">
        <ButtonComponent handleFunc={handlePushLoginPage}>확인</ButtonComponent>
        <ButtonComponent
          customStyle={{
            background: colorsModule.hlog_gray_2,
            color: colorsModule.hlog_dark_2,
          }}
          handleFunc={closeModal}
        >
          취소
        </ButtonComponent>
      </div>
    </GoLoginModalContainer>
  );
};

export default GoLoginModal;
