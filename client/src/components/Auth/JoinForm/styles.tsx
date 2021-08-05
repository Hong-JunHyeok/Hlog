import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const JoinFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10%;
  .join {
    &-section {
      & > h1 {
        font-weight: bold;
        margin-bottom: 10px;
        &::after {
          content: "·";
          color: ${colorsModule.hlog_primary};
          font-size: 24px;
        }
      }
    }
    &-input,
    &-desc {
      resize: none;
      border: 1px solid black;
      outline: none;
      background-color: #fff;
      height: 50px;
      padding: 0 9px 0 9px;
      border: 1px solid ${colorsModule.hlog_gray_2};
      margin-bottom: 30px;
      font-size: 15px;
      font-weight: bold;
      width: 100%;
      transition: ease-in-out 0.2s;
      &:focus {
        border: 1px solid ${colorsModule.hlog_dark_1};
      }
    }
    &-button {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      padding: 1px 10px 0 10px;
      border: none;
      background-color: ${colorsModule.hlog_primary};
      color: white;
      cursor: pointer;
    }
    &-goto_join {
      margin-top: 20px;
      text-align: center;
      & > a {
        font-weight: bold;
        text-decoration: none;
        color: #0078ff;
      }
    }
  }
  .conditions {
    display: flex;
    flex-direction: column;
    & > label {
      font-size: ${sizesModule.smallFontSize};
    }
  }
`;
