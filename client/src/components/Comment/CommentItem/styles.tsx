import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";

export const CommentItemContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${colorsModule.hlog_gray_2};
  .meta {
    display: flex;
    align-items: center;
    .profile {
      object-fit: cover;
      background-color: ${colorsModule.hlog_gray_3};
      border-radius: 50%;
      overflow: hidden;
    }
    .author {
      margin-left: 1rem;
      font-weight: bold;
      ${colorsModule.hlog_dark_2}
    }
    .createdAt {
      margin-left: 1rem;
      color: ${colorsModule.hlog_gray_1};
      font-weight: lighter;
      font-size: 12px;
    }
  }

  .content {
    padding: 2rem 0;
  }

  .open-recomment {
    display: block;
    text-align: center;
    color: ${colorsModule.hlog_primary};
    cursor: pointer;
    user-select: none;
  }
`;
