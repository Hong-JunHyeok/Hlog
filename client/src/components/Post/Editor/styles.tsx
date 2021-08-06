import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .title {
    border: none;
    background-color: transparent;
    outline: none;
    font-size: ${sizesModule.bigFontSize};
    font-weight: bold;
    padding: 1rem 0;
  }
  .underline {
    background: ${colorsModule.hlog_primary};
    height: 6px;
    width: 4rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 1px;
  }
  .content {
    height: 70%;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 1rem 0;
    font-size: 18px;
  }
`;
