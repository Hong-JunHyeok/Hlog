import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiImage,
} from "react-icons/bi";
import { MdFormatQuote } from "react-icons/md";
import { StyledTooloxContainer } from "./styles";

const ToolBox = () => {
  return (
    <StyledTooloxContainer>
      <ul className="tools">
        <li className="tool">H1</li>
        <li className="tool">H2</li>
        <li className="tool">H3</li>
        <li className="tool">H4</li>
        <li className="tool">H5</li>
        <li className="tool">H6</li>
        <li className="tool">
          <BiBold />
        </li>
        <li className="tool">
          <BiItalic />
        </li>
        <li className="tool">
          <BiStrikethrough />
        </li>
        <li className="tool">
          <MdFormatQuote />
        </li>
        <li className="tool">
          <BiImage />
        </li>
        <li className="tool">
          <BiCodeAlt />
        </li>
      </ul>
    </StyledTooloxContainer>
  );
};

export default ToolBox;
