import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useEffect,
  VFC,
} from "react";
import { EditorContainer } from "./styles";
import { BsArrowLeftShort } from "react-icons/bs";
import { useLink } from "../../../hooks/useLink";
import ToolBox from "./ToolBox";
import { usePostDispatch } from "../../../hooks/dispatches/usePostDispatch";
import { usePostState } from "../../../hooks/states/usePostState";

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
  const { handlePushLink } = useLink("/post");
  const { dispatchCreatePost } = usePostDispatch();
  const { createPostLoading, createPostDone } = usePostState();

  const handlePublish = useCallback(() => {
    dispatchCreatePost({
      title,
      content,
      thumnail: "",
    });
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
          <div className="btn save">임시저장</div>
          <div className="btn publish" onClick={handlePublish}>
            출간하기
          </div>
        </div>
      </footer>
    </EditorContainer>
  );
};

export default Editor;
