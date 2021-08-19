import Image from "next/image";
import { Comment } from "../../../types/Comment";
import { CommentItemContainer } from "./styles";
import ProfileImage from "../../../public/static/default_profile.png";
import getDistanceToNow from "../../../utils/getDistanceToNow";
import { useCallback, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import RecommentList from "../RecommentList";

const CommentItem = (commentData: Comment) => {
  const [recommentToggle, toggleRecomment] = useToggle(false);
  const createdAtDistanceNow = getDistanceToNow(commentData.created_at);

  const handleToggleRecomment = useCallback(() => {
    if (!recommentToggle) {
      const comment_id = commentData.comment_id;
      console.log(comment_id);
    }

    toggleRecomment();
  }, [recommentToggle]);

  const handleDeleteComment = useCallback(() => {
    const comment_id = commentData.comment_id;
    console.log(comment_id);

    // TODO DELETE COMMENT DISPATCH
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
      <span className="open-recomment" onClick={handleToggleRecomment}>
        {recommentToggle ? "-" : "+"} 답글
      </span>
      {recommentToggle && <RecommentList />}
    </CommentItemContainer>
  );
};

export default CommentItem;
