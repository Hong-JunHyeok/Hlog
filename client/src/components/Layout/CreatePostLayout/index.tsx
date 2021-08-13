import Head from "next/head";
import { KeyboardEvent, useCallback, useEffect, VFC } from "react";
import useInput from "../../../hooks/useInput";
import CodeViewer from "../../Post/CodeViewer";
import Editor from "../../Post/Editor";
import { StyledCreatePageContainer } from "./styles";

interface StorageData {
  title: string;
  content: string;
}

const CreatePageLayout: VFC = () => {
  const [title, onChangeTitle, setTitle] = useInput<string>("");
  const [content, onChangeContent, setContent] = useInput<string>("");

  const contentEventHandler = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {},
    [content],
  );

  useEffect(() => {
    const saveData: StorageData = JSON.parse(
      localStorage.getItem("savePostData"),
    );

    console.log(document.location.href);
    // setTitle(saveData.title || "");
    // setContent(saveData.content || "");
  }, []);

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
          setContent={setContent}
        />
        <CodeViewer title={title} content={content} />
      </StyledCreatePageContainer>
    </>
  );
};

export default CreatePageLayout;
