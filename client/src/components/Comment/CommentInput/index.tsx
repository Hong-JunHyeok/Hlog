import { CommentInputContainer } from "./styles";
import autosize from "autosize";
import { useEffect, useRef } from "react";
import { ButtonComponent } from "../../Common/Button";

const CommentInput = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef.current]);

  return (
    <CommentInputContainer>
      <textarea
        ref={textAreaRef}
        className="comment"
        placeholder="댓글을 작성하세요."
      />
      <div className="button-wrapper">
        <button className="create-comment" type="button">
          댓글 작성
        </button>
      </div>
    </CommentInputContainer>
  );
};

export default CommentInput;
