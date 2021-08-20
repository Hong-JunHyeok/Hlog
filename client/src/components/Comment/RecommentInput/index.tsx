import { useCallback, useEffect, useRef, VFC } from "react";
import autosize from "autosize";
import { CommentInputContainer } from "../CommentInput/styles";
import useInput from "../../../hooks/useInput";
import { useUserState } from "../../../hooks/states/useUserState";
import useModal from "../../../hooks/useModal";
import GoLoginModal from "../../Post/GoLoginModal";
import { useRecommentDispatch } from "../../../hooks/dispatches/useRecommentDispatch";
import { toast } from "react-toastify";
import { useRecommentState } from "../../../hooks/states/useRecommentState";

interface IRecommentInputProps {
  comment_id: string;
}

const RecommentInput: VFC<IRecommentInputProps> = ({ comment_id }) => {
  const { createRecommentDone, createRecommentLoading } = useRecommentState();
  const { createRecommentDispatch, getRecommentDispatch } =
    useRecommentDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [recomment, onChangeRecomment, setRecomment] = useInput("");
  const { me } = useUserState();
  const { openModal, closeModal, ModalPortal } = useModal({
    position: "center",
  });

  const handleRecommentSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!me) {
        openModal();
      } else {
        if (!recomment.trim()) {
          toast.error("답글을 작성해주세요.");
        } else {
          createRecommentDispatch({
            author: me?.name,
            comment_id,
            content: recomment,
          });
          setRecomment("");
        }
      }
    },
    [me, recomment],
  );

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef.current]);

  useEffect(() => {
    if (createRecommentDone) {
      //TODO get recomments list
      getRecommentDispatch(comment_id);
    }
  }, [createRecommentDone]);

  return (
    <>
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
            {createRecommentLoading ? "작성 중..." : "답글 작성"}
          </button>
        </div>
      </CommentInputContainer>
      <ModalPortal>
        <GoLoginModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
};

export default RecommentInput;
