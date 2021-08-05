import { FC } from "react";
import { StyledPostPageLayout } from "./styles";

const PostsPageLayout: FC = ({ children }) => {
  return (
    <StyledPostPageLayout>
      <nav>
        <div className="nav-item">트렌드</div>
        <div className="nav-item">최신</div>
      </nav>
      <div className="post-container">{children}</div>
    </StyledPostPageLayout>
  );
};

export default PostsPageLayout;
