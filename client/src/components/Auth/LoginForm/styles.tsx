import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10%;
  .login-input {
    border: 1px solid black;
    outline: none;
    height: 50px;
    padding: 0 9px 0 9px;
    border: 1px solid ${colorsModule.hlog_gray_2};
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: bold;
    transition: ease-in-out 0.2s;
    &:focus {
      border: 1px solid ${colorsModule.hlog_dark_1};
    }
  }
  .login-button {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    padding: 1px 10px 0 10px;
    border: none;
    background-color: ${colorsModule.hlog_primary};
    color: white;
    cursor: pointer;
  }
  .login-goto_join {
    margin-top: 20px;
    text-align: center;
    & > a {
      font-weight: bold;
      text-decoration: none;
      color: ${colorsModule.hlog_blue};
    }
  }
`;
