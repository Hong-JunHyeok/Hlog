import { ChangeEvent, KeyboardEvent, VFC } from "react";
import { EditorContainer } from "./styles";
import { BsArrowLeftShort } from "react-icons/bs";

interface IEditorProps {
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLElement>) => void;
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
}) => {
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
      <ul className="tools"></ul>
      <textarea
        value={content}
        onChange={onChangeContent}
        onKeyPress={contentEventHandler}
        className="content"
        placeholder="내용을 입력하세요."
      />

      <footer className="editor-footer">
        <div className="left">
          <div className="btn out">
            <BsArrowLeftShort size={25} />
            나가기
          </div>
        </div>
        <div className="right">
          <div className="btn save">임시저장</div>
          <div className="btn publish">출간하기</div>
        </div>
      </footer>
    </EditorContainer>
  );
};

export default Editor;
