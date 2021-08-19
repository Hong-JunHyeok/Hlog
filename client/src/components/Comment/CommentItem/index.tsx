import Image from "next/image";
import { Comment } from "../../../types/Comment";
import { CommentItemContainer } from "./styles";
import ProfileImage from "../../../public/static/default_profile.png";
import getDistanceToNow from "../../../utils/getDistanceToNow";
import { useCallback, useEffect, useState, VFC } from "react";
import useToggle from "../../../hooks/useToggle";
import RecommentList from "../RecommentList";
import { useCommentDispatch } from "../../../hooks/dispatches/useCommentDispatch";
import { useCommentState } from "../../../hooks/states/useCommentState";

interface ICommentProps {
  commentData: Comment;
  mode: "comment" | "recomment";
}

const CommentItem: VFC<ICommentProps> = ({ commentData, mode }) => {
  const isCommentMode = mode === "comment";

  const { deleteCommentDispatch } = useCommentDispatch();
  const [recommentToggle, toggleRecomment] = useToggle(false);
  const createdAtDistanceNow = getDistanceToNow(commentData.created_at);

  const handleToggleRecomment = useCallback(() => {
    if (!recommentToggle) {
      const comment_id = commentData.comment_id;
    }

    toggleRecomment();
  }, [recommentToggle]);

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
      <p className="content">{commentData.content}</p>
      {isCommentMode && (
        <span className="open-recomment" onClick={handleToggleRecomment}>
          {recommentToggle ? "-" : "+"} 답글
        </span>
      )}

      {isCommentMode && recommentToggle && <RecommentList />}
    </CommentItemContainer>
  );
};

export default CommentItem;
