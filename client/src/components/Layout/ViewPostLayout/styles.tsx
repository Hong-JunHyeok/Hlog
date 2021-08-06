import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const StyledViewContainer = styled.div`
  .post-header {
    width: 100%;
    padding: 3rem 0;
    border-bottom: 1px solid ${colorsModule.hlog_gray_1};
    h1 {
      font-size: ${sizesModule.bigFontSize};
      font-weight: bold;
    }
    .meta {
      padding-top: 10px;
      .author {
        &::before {
          content: "글쓴이 : ";
        }
      }
      .createdAt {
        padding-left: 20px;
      }
    }
  }

  .post-main {
    padding-top: 2rem;
  }
`;
