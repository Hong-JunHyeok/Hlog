import { ChangeEvent, KeyboardEvent, VFC } from "react";
import { parse } from "marked";
import { EditorContainer } from "./styles";

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
    </EditorContainer>
  );
};

export default Editor;
