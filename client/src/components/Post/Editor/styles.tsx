import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const EditorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  position: relative;

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
    width: 100%;
    height: 70%;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 1rem 0;
    font-size: 18px;
    resize: none;
  }
  .editor-footer {
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    .btn {
      ${mixinModules.flexLayoutCenterSort}
      height: 2.5rem;
      font-size: 1.125rem;
      cursor: pointer;
      padding: 0 1rem;
      border-radius: 6px;
      margin: 0 10px;
    }
  }
  .right {
    display: flex;
  }
  .out {
    &:hover {
      background-color: ${colorsModule.hlog_gray_3};
    }
  }
  .save {
    background: rgb(233, 236, 239);
    color: rgb(73, 80, 87);
    &:hover {
      filter: brightness(1.02);
    }
  }
  .publish {
    background-color: ${colorsModule.hlog_primary};
    color: #f2f2f2;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;
