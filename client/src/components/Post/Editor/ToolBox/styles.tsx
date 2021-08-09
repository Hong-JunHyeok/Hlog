import styled from "@emotion/styled";
import { colorsModule } from "../../../../styles/colors";
import { sizesModule } from "../../../../styles/sizes";

export const StyledTooloxContainer = styled.div`
  .tools {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .tool {
      cursor: pointer;
      user-select: none;
      padding: 1rem;
      font-size: ${sizesModule.middleFontSize};
      color: rgb(134, 142, 150);
      &:hover {
        color: ${colorsModule.hlog_dark_1};
        background-color: ${colorsModule.hlog_gray_2};
      }
    }
  }
`;
