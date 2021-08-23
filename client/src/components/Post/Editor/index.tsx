import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useEffect,
  VFC,
} from "react";
// import CircularJSON from "circular-json";
import { EditorContainer } from "./styles";
import { BsArrowLeftShort } from "react-icons/bs";
import { useLink } from "../../../hooks/useLink";
import ToolBox from "./ToolBox";
import { usePostState } from "../../../hooks/states/usePostState";
import useModal from "../../../hooks/useModal";
import CheckCreatePostModal from "../CheckCreatePostModal";
import { toast, Flip } from "react-toastify";

interface IEditorProps {
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLElement>) => void;
  setContent: Dispatch<SetStateAction<string>>;
  content: string;
  onChangeContent: (e: ChangeEvent<HTMLElement>) => void;
  contentEventHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Editor: VFC<IEditorProps> = ({
  content,
  onChangeContent,
  onChangeTitle,
  title,
  contentEventHandler,
  setContent,
}) => {
  const { ModalPortal, closeModal, openModal } = useModal({
    position: "bottom",
  });

  const { handlePushLink } = useLink("/");
  const { createPostDone } = usePostState();

  const handleOpenCheckCreatePostModal = useCallback(() => {
    if (!title || !content) {
      toast.error("제목, 내용에 공백이 있으면 안됩니다.", {
        transition: Flip,
      });
    } else {
      openModal();
    }
  }, [title, content]);

  const handleSave = useCallback(() => {
    // if (!title || !content) {
    //   toast.error("제목, 내용에 공백이 있으면 안됩니다.", {
    //     transition: Flip,
    //   });
    // } else {
    //   const savePostData = CircularJSON.stringify({
    //     title,
    //     content,
    //   }).toString();
    //   localStorage.setItem("savePostData", savePostData);
    //   toast.success("임시 저장에 성공했습니다.", {
    //     transition: Flip,
    //   });
    // }
  }, [title, content]);

  useEffect(() => {
    if (createPostDone) {
      handlePushLink();
    }
  }, [createPostDone]);

  return (
    <EditorContainer>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        className="title"
        placeholder="제목을 입력하세요."
      />
      <div className="underline" />
      <ToolBox setContent={setContent} />
      <textarea
        value={content}
        onChange={onChangeContent}
        onKeyPress={contentEventHandler}
        className="content"
        placeholder="내용을 입력하세요."
      />

      <footer className="editor-footer">
        <div className="left">
          <div className="btn out" onClick={handlePushLink}>
            <BsArrowLeftShort size={25} />
            나가기
          </div>
        </div>
        <div className="right">
          <div className="btn save" onClick={handleSave}>
            임시저장
          </div>
          <div className="btn publish" onClick={handleOpenCheckCreatePostModal}>
            출간하기
          </div>
        </div>
      </footer>
      <ModalPortal>
        <CheckCreatePostModal
          title={title}
          content={content}
          openModal={openModal}
          closeModal={closeModal}
          // handlePublish={handlePublish}
        />
      </ModalPortal>
    </EditorContainer>
  );
};

export default Editor;
