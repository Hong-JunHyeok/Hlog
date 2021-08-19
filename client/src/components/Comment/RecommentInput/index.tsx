import { useCallback, useEffect, useRef } from "react";
import autosize from "autosize";
import { CommentInputContainer } from "../CommentInput/styles";
import useInput from "../../../hooks/useInput";

const RecommentInput = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleRecommentSubmit = useCallback(() => {}, []);

  const [recomment, onChangeRecomment, setRecomment] = useInput("");

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef.current]);

  return (
    <CommentInputContainer onSubmit={handleRecommentSubmit}>
      <textarea
        ref={textAreaRef}
        className="comment"
        placeholder="답글을 작성하세요."
        value={recomment}
        onChange={onChangeRecomment}
      />
      <div className="button-wrapper">
        <button className="create-comment" type="submit">
          {false ? "작성 중..." : "답글 작성"}
        </button>
      </div>
    </CommentInputContainer>
  );
};

export default RecommentInput;
