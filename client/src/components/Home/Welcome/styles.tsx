import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";

export const StyledWelcome = styled.h1`
  font-size: 150px;
  ${mixinModules.flexLayoutCenterSort}
  flex-direction: column;
  margin-top: 5%;
  font-weight: bold;
  p {
    font-size: 16px;
    font-weight: lighter;
    color: ${colorsModule.hlog_gray_1};
  }
`;
