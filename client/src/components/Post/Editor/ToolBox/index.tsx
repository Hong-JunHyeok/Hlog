import { Dispatch, SetStateAction, useCallback, VFC } from "react";
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiImage,
} from "react-icons/bi";
import { MdFormatQuote } from "react-icons/md";
import { StyledTooloxContainer } from "./styles";

interface IToolBoxProps {
  setContent: Dispatch<SetStateAction<string>>;
}

const ToolBox: VFC<IToolBoxProps> = ({ setContent }) => {
  const handleClickH1 = useCallback(() => {
    setContent((prev) => prev + "# 텍스트1\n");
  }, []);
  const handleClickH2 = useCallback(() => {
    setContent((prev) => prev + "## 텍스트1\n");
  }, []);
  const handleClickH3 = useCallback(() => {
    setContent((prev) => prev + "### 텍스트1\n");
  }, []);
  const handleClickH4 = useCallback(() => {
    setContent((prev) => prev + "#### 텍스트1\n");
  }, []);
  const handleClickH5 = useCallback(() => {
    setContent((prev) => prev + "##### 텍스트1\n");
  }, []);
  const handleClickH6 = useCallback(() => {
    setContent((prev) => prev + "###### 텍스트1\n");
  }, []);

  const handleClickBold = useCallback(() => {
    setContent((prev) => prev + "**텍스트**");
  }, []);

  const handleClickItalic = useCallback(() => {
    setContent((prev) => prev + "_텍스트_");
  }, []);

  const handleClickStrikethrough = useCallback(() => {
    setContent((prev) => prev + "~텍스트~");
  }, []);

  const handleClickQuote = useCallback(() => {
    setContent((prev) => prev + "> 텍스트");
  }, []);

  const handleClickImage = useCallback(() => {
    setContent((prev) => prev + "![]()");
  }, []);

  const handleClickSource = useCallback(() => {
    setContent((prev) => prev + "\n```소스코드```\n");
  }, []);

  return (
    <StyledTooloxContainer>
      <ul className="tools">
        <li className="tool" onClick={handleClickH1}>
          H1
        </li>
        <li className="tool" onClick={handleClickH2}>
          H2
        </li>
        <li className="tool" onClick={handleClickH3}>
          H3
        </li>
        <li className="tool" onClick={handleClickH4}>
          H4
        </li>
        <li className="tool" onClick={handleClickH5}>
          H5
        </li>
        <li className="tool" onClick={handleClickH6}>
          H6
        </li>
        <li className="tool" onClick={handleClickBold}>
          <BiBold />
        </li>
        <li className="tool" onClick={handleClickItalic}>
          <BiItalic />
        </li>
        <li className="tool" onClick={handleClickStrikethrough}>
          <BiStrikethrough />
        </li>
        <li className="tool" onClick={handleClickQuote}>
          <MdFormatQuote />
        </li>
        <li className="tool" onClick={handleClickImage}>
          <BiImage />
        </li>
        <li className="tool" onClick={handleClickSource}>
          <BiCodeAlt />
        </li>
      </ul>
    </StyledTooloxContainer>
  );
};

export default ToolBox;
