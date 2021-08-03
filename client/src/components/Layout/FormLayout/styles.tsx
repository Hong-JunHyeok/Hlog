import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { sizesModule } from "../../../styles/sizes";

export const FormContainer = styled.div`
  width: 570px;
  padding: 50px 0;
  background-color: white;
  .form {
    &-header {
      margin-top: 10px;
      margin-bottom: 50px;
      border-bottom: 3px solid ${colorsModule.hlog_dark_1};
      & > .logo {
        font-weight: bold;
        font-size: ${sizesModule.bigFontSize};
        color: ${colorsModule.hlog_primary};
        cursor: pointer;
        text-align: center;
      }
      & > h2 {
        text-align: center;
        margin: 0 auto;
        width: 80%;
        font-size: 24px;
        padding: 20px;
      }
    }

    &-footer {
      text-align: center;
    }
  }
`;
