import { useCallback, VFC } from "react";
import { ButtonComponent } from "../../Common/Button";
import { DeleteModalContainer } from "./styles";

interface IDeleteModalProps {
  post_id: string;
  closeDeleteModal: () => void;
}

const DeleteModal: VFC<IDeleteModalProps> = ({ post_id, closeDeleteModal }) => {
  const handleDeletePost = useCallback(() => {
    console.log(post_id);
  }, []);

  return (
    <DeleteModalContainer>
      <h1>정말로 삭제하시겠습니까?</h1>
      <span>삭제한 포스트는 다시 복구할 수 없습니다.</span>
      <div className="buttons">
        <ButtonComponent handleFunc={handleDeletePost}>예</ButtonComponent>
        <ButtonComponent handleFunc={closeDeleteModal}>아니요</ButtonComponent>
      </div>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
