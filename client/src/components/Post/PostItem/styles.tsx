import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const StyledPost = styled.div`
  width: 47%;

  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  border: 1px solid ${colorsModule.hlog_gray_2};
  padding: 2rem 1rem;
  /* border-radius: 10px; */
  margin: 2rem 0;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover,
  & > .thumnail {
    /* transform: translateY(-10px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 22px 39px 0px; */
    filter: brightness(70%);
  }
  h1 {
    font-size: ${sizesModule.middleFontSize};
  }
  .meta {
    ${mixinModules.flexLayoutCenterSort}
    justify-content: space-between;
    padding-top: 20px;
    .author {
      font-weight: bold;
      color: ${colorsModule.hlog_blue};
    }
    .createdAt {
      margin-left: 10px;
      font-weight: lighter;
    }
    .likers {
      font-size: ${sizesModule.smallFontSize};
      font-weight: lighter;
      &::before {
        content: "좋아요 : ";
      }
    }
    .comments {
      padding-left: 20px;
      font-size: ${sizesModule.smallFontSize};
      font-weight: lighter;
      &::before {
        content: "댓글 : ";
      }
    }
  }
`;
