import { useCallback, useEffect, VFC } from "react";
import { toast } from "react-toastify";
import { usePostDispatch } from "../../../hooks/dispatches/usePostDispatch";
import { usePostState } from "../../../hooks/states/usePostState";
import { useLink } from "../../../hooks/useLink";
import { ButtonComponent } from "../../Common/Button";
import { DeleteModalContainer } from "./styles";

interface IDeleteModalProps {
  post_id: string;
  closeDeleteModal: () => void;
}

const DeleteModal: VFC<IDeleteModalProps> = ({ post_id, closeDeleteModal }) => {
  const { dispatchDeletePost } = usePostDispatch();
  const { deletePostDone, deletePostLoading } = usePostState();
  const { handlePushLink } = useLink("/post");

  const handleDeletePost = useCallback(() => {
    dispatchDeletePost(post_id);
  }, [post_id]);

  useEffect(() => {
    if (deletePostDone) {
      toast.success("포스트 삭제 성공.");
      closeDeleteModal();
      handlePushLink();
    }
  }, [deletePostDone]);

  return (
    <DeleteModalContainer>
      <h1>정말로 삭제하시겠습니까?</h1>
      <span>삭제한 포스트는 다시 복구할 수 없습니다.</span>
      <div className="buttons">
        <ButtonComponent
          handleFunc={handleDeletePost}
          loading={deletePostLoading}
          loadingMsg="삭제중..."
        >
          예
        </ButtonComponent>
        <ButtonComponent handleFunc={closeDeleteModal}>아니요</ButtonComponent>
      </div>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
