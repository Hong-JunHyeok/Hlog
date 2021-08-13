import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const StyledProfileEditForm = styled.form`
  width: 60%;
  background-color: white;
  z-index: 999;
  .require {
    & > h1::after {
      margin-left: 10px;
      content: "·";
      font-size: ${sizesModule.middleFontSize};
      color: ${colorsModule.hlog_primary};
    }
  }
  .name > input {
    width: 30%;
  }
  .desc > textarea {
    width: 100%;
  }
  .submit {
    margin: 2rem;
    text-align: center;
  }
  .edit {
    padding: 1rem;
    border-bottom: 1px solid ${colorsModule.hlog_gray_2};
    & > h1 {
      font-size: ${sizesModule.middleFontSize};
    }
    & > input,
    textarea {
      resize: none;
      margin: 10px 0;
      border: 1px solid black;
      outline: none;
      height: 50px;
      padding: 0 9px 0 9px;
      border: 1px solid ${colorsModule.hlog_gray_2};
      font-size: 15px;
      font-weight: bold;
      transition: ease-in-out 0.2s;
      &:focus {
        border: 1px solid ${colorsModule.hlog_dark_1};
      }
    }

    & > button {
      margin: 10px 0;
    }
  }
`;
