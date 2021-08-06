import Head from "next/head";
import { ChangeEvent, FC, KeyboardEvent, useCallback, VFC } from "react";
import useInput from "../../../hooks/useInput";
import CodeViewer from "../../Post/CodeViewer";
import Editor from "../../Post/Editor";
import { StyledCreatePageContainer } from "./styles";
import { parseInline } from "marked";

const CreatePageLayout: VFC = () => {
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const contentEventHandler = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {},
    [content],
  );

  return (
    <>
      <Head>
        <title>{title ? `(작성중)${title}` : "HLOG | 새 글 작성"}</title>
      </Head>
      <StyledCreatePageContainer>
        <Editor
          title={title}
          onChangeTitle={onChangeTitle}
          content={content}
          onChangeContent={onChangeContent}
          contentEventHandler={contentEventHandler}
        />
        <CodeViewer title={title} content={content} />
      </StyledCreatePageContainer>
    </>
  );
};

export default CreatePageLayout;