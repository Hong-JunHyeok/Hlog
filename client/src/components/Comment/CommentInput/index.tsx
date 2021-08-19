import { CommentInputContainer } from "./styles";
import autosize from "autosize";
import { useCallback, useEffect, useRef } from "react";
import { useCommentDispatch } from "../../../hooks/dispatches/useCommentDispatch";
import { usePostState } from "../../../hooks/states/usePostState";
import useInput from "../../../hooks/useInput";
import { useCommentState } from "../../../hooks/states/useCommentState";
import { useUserState } from "../../../hooks/states/useUserState";
import { format } from "date-fns";

const CommentInput = () => {
  const { me } = useUserState();
  const { post } = usePostState();
  const { createCommentLoading } = useCommentState();
  const { createCommentDispatch } = useCommentDispatch();
  const [comment, onChangeComment, setComment] = useInput("");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCommentSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createCommentDispatch(
        me?.name,
        post.post_id,
        format(new Date(), "yyyy-MM-dd"),
        comment,
      );
      setComment("");
    },
    [me, comment],
  );

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef.current]);

  return (
    <CommentInputContainer onSubmit={handleCommentSubmit}>
      <textarea
        ref={textAreaRef}
        className="comment"
        placeholder="댓글을 작성하세요."
        value={comment}
        onChange={onChangeComment}
      />
      <div className="button-wrapper">
        <button className="create-comment" type="submit">
          {createCommentLoading ? "작성 중..." : "댓글 작성"}
        </button>
      </div>
    </CommentInputContainer>
  );
};

export default CommentInput;
