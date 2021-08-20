import Image from "next/image";
import { Comment } from "../../../types/Comment";
import { CommentItemContainer } from "./styles";
import ProfileImage from "../../../public/static/default_profile.png";
import getDistanceToNow from "../../../utils/getDistanceToNow";
import { useCallback, VFC } from "react";
import RecommentList from "../RecommentList";
import { useCommentDispatch } from "../../../hooks/dispatches/useCommentDispatch";
import { useRecommentState } from "../../../hooks/states/useRecommentState";
import { useRecommentDispatch } from "../../../hooks/dispatches/useRecommentDispatch";

interface ICommentProps {
  commentData: Comment;
  mode: "comment" | "recomment";
  changeToggleListByIndex?: () => void;
  toggleState?: boolean;
}

const CommentItem: VFC<ICommentProps> = ({
  commentData,
  mode,
  changeToggleListByIndex,
  toggleState,
}) => {
  const isCommentMode = mode === "comment";

  const { recomments } = useRecommentState();
  const { getRecommentDispatch } = useRecommentDispatch();
  const { deleteCommentDispatch } = useCommentDispatch();
  const createdAtDistanceNow = getDistanceToNow(commentData.created_at);

  const handleToggleRecomment = useCallback(() => {
    console.log(toggleState);
    changeToggleListByIndex();
    if (!toggleState) {
      const comment_id = commentData.comment_id;
      getRecommentDispatch(comment_id);
    }
  }, [toggleState]);

  const handleDeleteComment = useCallback(() => {
    const comment_id = commentData.comment_id;

    deleteCommentDispatch(comment_id);
  }, []);

  return (
    <CommentItemContainer>
      <div className="meta">
        <Image width={54} height={54} src={ProfileImage} className="profile" />
        <div>
          <div className="author">{commentData.author}</div>
          <div className="createdAt">{createdAtDistanceNow}</div>
        </div>
        <div className="delete" onClick={handleDeleteComment}>
          삭제
        </div>
      </div>
      <p className="content">
        {commentData.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      {isCommentMode && (
        <span className="open-recomment" onClick={handleToggleRecomment}>
          {toggleState ? "-" : "+"} 답글
        </span>
      )}

      {isCommentMode && toggleState && (
        <RecommentList
          comment_id={commentData.comment_id}
          recomments={recomments}
        />
      )}
    </CommentItemContainer>
  );
};

export default CommentItem;
