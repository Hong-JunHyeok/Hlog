import { VFC } from "react";
import { CodeViewContainer } from "./styles";

interface ICodeViwerProps {
  title: string;
  content: string;
}

const CodeViewer: VFC<ICodeViwerProps> = ({ title, content }) => {
  return (
    <CodeViewContainer>
      <h1>{title}</h1>
      <div>{content}</div>
    </CodeViewContainer>
  );
};

export default CodeViewer;
