import Image from "next/image";
import { Comment } from "../../../types/Comment";
import { CommentItemContainer } from "./styles";
import ProfileImage from "../../../public/static/default_profile.png";
import getDistanceToNow from "../../../utils/getDistanceToNow";
import { useCallback, useEffect, VFC } from "react";
import useToggle from "../../../hooks/useToggle";
import RecommentList from "../RecommentList";
import { useCommentDispatch } from "../../../hooks/dispatches/useCommentDispatch";
import { useRecommentState } from "../../../hooks/states/useRecommentState";
import { useRecommentDispatch } from "../../../hooks/dispatches/useRecommentDispatch";
import { useUserState } from "../../../hooks/states/useUserState";

interface ICommentProps {
  commentData: Comment;
  mode: "comment" | "recomment";
}

const CommentItem: VFC<ICommentProps> = ({ commentData, mode }) => {
  const isCommentMode = mode === "comment";

  const { me } = useUserState();
  const isMyComment = me?.name === commentData.author;
  const { recomments, deleteRecommentDone } = useRecommentState();
  const { getRecommentDispatch, deleteRecommentDisaptch } =
    useRecommentDispatch();
  const { deleteCommentDispatch } = useCommentDispatch();
  const [recommentToggle, toggleRecomment, setToggleState] = useToggle(false);
  const createdAtDistanceNow = getDistanceToNow(commentData.created_at);

  const handleToggleRecomment = useCallback(() => {
    if (!recommentToggle) {
      const comment_id = commentData.comment_id;
      getRecommentDispatch(comment_id);
      //TODO Get recomment list
    }

    toggleRecomment();
  }, [recommentToggle]);

  const handleDeleteRecomment = useCallback(() => {
    const { recomment_id } = commentData;
    deleteRecommentDisaptch(recomment_id);
  }, [commentData]);

  const handleDeleteComment = useCallback(() => {
    const comment_id = commentData.comment_id;

    deleteCommentDispatch(comment_id);
  }, []);

  useEffect(() => {
    if (deleteRecommentDone) {
      setToggleState(false);
    }
  }, [deleteRecommentDone, setToggleState]);

  return (
    <CommentItemContainer>
      <div className="meta">
        <Image width={54} height={54} src={ProfileImage} className="profile" />
        <div>
          <div className="author">{commentData.author}</div>
          <div className="createdAt">{createdAtDistanceNow}</div>
        </div>
        {isMyComment && (
          <div
            className="delete"
            onClick={
              mode === "comment" ? handleDeleteComment : handleDeleteRecomment
            }
          >
            삭제
          </div>
        )}
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
          {recommentToggle ? "-" : "+"} 답글
        </span>
      )}

      {isCommentMode && recommentToggle && (
        <RecommentList
          comment_id={commentData.comment_id}
          recomments={recomments[commentData.comment_id]}
        />
      )}
    </CommentItemContainer>
  );
};

export default CommentItem;
