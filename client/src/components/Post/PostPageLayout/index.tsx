import { FC } from "react";
import { StyledPostPageLayout } from "./styles";

const PostPageLayout: FC = ({ children }) => {
  return (
    <StyledPostPageLayout>
      <nav>
        <div className="nav-item">트렌드</div>
        <div className="nav-item">최신</div>
      </nav>
      {children}
    </StyledPostPageLayout>
  );
};

export default PostPageLayout;
