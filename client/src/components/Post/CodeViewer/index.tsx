import { VFC } from "react";
import { CodeViewContainer } from "./styles";
import lexer, { parse, parseInline, getDefaults } from "marked";

interface ICodeViwerProps {
  title: string;
  content: string;
}

const CodeViewer: VFC<ICodeViwerProps> = ({ title, content }) => {
  console.log(lexer(content));
  const createMarkup = (content: string) => {
    return { __html: lexer(content) };
  };

  return (
    <CodeViewContainer>
      <h1 className="view-title">{title}</h1>
      <div
        className="view-content"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </CodeViewContainer>
  );
};

export default CodeViewer;
