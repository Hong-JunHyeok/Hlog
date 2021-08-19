import Image from "next/image";
import { colorsModule } from "../../../styles/colors";
import { Comment } from "../../../types/Comment";
import { ButtonComponent } from "../../Common/Button";
import { CommentItemContainer } from "./styles";
import ProfileImage from "../../../public/static/default_profile.png";
import { format } from "date-fns";

const CommentItem = (commentData: Comment) => {
  const commentCreatedAt = format(
    new Date(commentData.created_at),
    "yyyy-mm-dd",
  );

  return (
    <CommentItemContainer>
      <div className="meta">
        <Image width={54} height={54} src={ProfileImage} className="profile" />
        <div>
          <div className="author">{commentData.author}</div>
          <div className="createdAt">{commentCreatedAt}</div>
        </div>
      </div>
      <p className="content">{commentData.content}</p>
      <ButtonComponent
        customStyle={{
          width: "100%",
          background: "inherit",
          color: colorsModule.hlog_primary,
          border: `1px solid ${colorsModule.hlog_primary}`,
        }}
      >
        답글
      </ButtonComponent>
    </CommentItemContainer>
  );
};

export default CommentItem;
