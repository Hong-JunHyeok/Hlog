import { VFC } from "react";
import { CodeViewContainer } from "./styles";

interface ICodeViwerProps {
  title: string;
  content: string;
}

const CodeViewer: VFC<ICodeViwerProps> = ({ title, content }) => {
  return (
    <CodeViewContainer>
      <h1 className="view-title">{title}</h1>
      <div className="view-content">{content}</div>
    </CodeViewContainer>
  );
};

export default CodeViewer;
