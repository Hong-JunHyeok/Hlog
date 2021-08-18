import { CommentInputContainer } from "./styles";
import autosize from "autosize";
import { useCallback, useEffect, useRef } from "react";
import { useCommentDispatch } from "../../../hooks/dispatches/useCommentDispatch";
import { usePostState } from "../../../hooks/states/usePostState";
import useInput from "../../../hooks/useInput";

const CommentInput = () => {
  const { post } = usePostState();
  const { createCommentDispatch } = useCommentDispatch();
  const [comment, onChangeComment] = useInput("");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCommentSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createCommentDispatch(post.post_id, comment);
    },
    [comment],
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
          댓글 작성
        </button>
      </div>
    </CommentInputContainer>
  );
};

export default CommentInput;
