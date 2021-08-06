import { FC } from "react";
import { useLink } from "../../../hooks/useLink";
import { ButtonComponent } from "../../Common/Button";
import { StyledPostPageLayout } from "./styles";

const PostsPageLayout: FC = ({ children }) => {
  const { handlePushLink: handlePushCreate } = useLink("/post/create");

  return (
    <StyledPostPageLayout>
      <nav>
        <div className="post-sorter">
          {/* <div className="nav-item">트렌드</div>
          <div className="nav-item">최신</div> */}
        </div>
        <ButtonComponent
          customStyle={{ width: "100px" }}
          handleFunc={handlePushCreate}
        >
          글 작성
        </ButtonComponent>
      </nav>
      <div className="post-container">{children}</div>
    </StyledPostPageLayout>
  );
};

export default PostsPageLayout;
