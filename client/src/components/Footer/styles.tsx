import styled from "@emotion/styled";
import { colorsModule } from "../../styles/colors";
import { sizesModule } from "../../styles/sizes";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${colorsModule.hlog_dark_2};
  .footer-container {
    max-width: ${sizesModule.pageMaxWidth};
    margin: 0 auto;
    padding: 7rem 0;
    color: ${colorsModule.hlog_gray_3};
    font-size: ${sizesModule.middleFontSize};
    text-align: center;
  }
`;
