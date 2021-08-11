import { FC, useCallback } from "react";
import { useUserState } from "../../../hooks/states/useUserState";
import { useLink } from "../../../hooks/useLink";
import useModal from "../../../hooks/useModal";
import { ButtonComponent } from "../../Common/Button";
import GoLoginModal from "../../Post/GoLoginModal";
import { StyledPostPageLayout } from "./styles";

const PostsPageLayout: FC = ({ children }) => {
  const { handlePushLink: handlePushCreate } = useLink("/post/create");
  const { ModalPortal, openModal, closeModal } = useModal({
    position: "center",
  });

  const { loginDone } = useUserState();

  const loginCheckBeforeWrite = useCallback(() => {
    if (loginDone) {
      handlePushCreate();
    } else {
      openModal();
    }
  }, [loginDone]);

  return (
    <StyledPostPageLayout>
      <nav>
        <div className="post-sorter">
          {/* <div className="nav-item">트렌드</div>
          <div className="nav-item">최신</div> */}
        </div>
        <ButtonComponent
          customStyle={{ width: "100px" }}
          handleFunc={loginCheckBeforeWrite}
        >
          글 작성
        </ButtonComponent>
      </nav>
      <div className="post-container">{children}</div>
      <ModalPortal>
        <GoLoginModal closeModal={closeModal} />
      </ModalPortal>
    </StyledPostPageLayout>
  );
};

export default PostsPageLayout;
