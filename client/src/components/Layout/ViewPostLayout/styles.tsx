import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const StyledViewContainer = styled.div`
  .post-header {
    margin: 0 auto;
    max-width: ${sizesModule.viewPostMaxWidth};
    padding: 3rem 0 1rem 0;
    border-bottom: 1px solid ${colorsModule.hlog_gray_1};
    h1 {
      font-size: ${sizesModule.bigFontSize};
      font-weight: bold;
    }
    .meta {
      padding-top: 10px;
      .author {
        &::before {
          content: "작성자 : ";
          color: ${colorsModule.hlog_dark_1};
        }
        cursor: pointer;
        color: ${colorsModule.hlog_blue};
      }
      .createdAt {
        padding-left: 20px;
      }
      .like {
        margin-left: 1rem;
        &::before {
          content: "댓글 : ";
        }
      }
    }
    .options {
      display: flex;

      justify-content: flex-end;
      & > li {
        color: ${colorsModule.hlog_gray_1};
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
  }

  .post-main {
    padding-top: 2rem;
    max-width: ${sizesModule.viewPostMaxWidth};
    .thumnail {
      width: 100%;
      text-align: center;
    }
  }
`;
