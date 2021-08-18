import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";

export const CommentInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  .comment {
    width: 100%;
    padding: 1rem 0.5rem;
    resize: none;
    outline: none;
    border: 1px solid ${colorsModule.hlog_gray_2};
    &::placeholder {
      color: ${colorsModule.hlog_gray_2};
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
    .create-comment {
      ${mixinModules.flexLayoutCenterSort}
      background-color : ${colorsModule.hlog_primary};
      color: #fff;
      border-radius: 4px;
      font-size: 1rem;
      padding: 0.2rem 1.25rem;
      border: none;
    }
  }
`;
