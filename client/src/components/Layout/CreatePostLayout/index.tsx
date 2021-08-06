import Head from "next/head";
import { FC, VFC } from "react";
import useInput from "../../../hooks/useInput";
import CodeViewer from "../../Post/CodeViewer";
import Editor from "../../Post/Editor";
import { StyledCreatePageContainer } from "./styles";

const CreatePageLayout: VFC = () => {
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");

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
        />
        <CodeViewer title={title} content={content} />
      </StyledCreatePageContainer>
    </>
  );
};

export default CreatePageLayout;
