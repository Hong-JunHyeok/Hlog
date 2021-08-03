import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const StyledWelcome = styled.h1`
  font-size: 150px;
  ${mixinModules.flexLayoutCenterSort}
  flex-direction: column;
  margin-top: 15%;
  font-weight: bold;
  p {
    font-size: ${sizesModule.middleFontSize};
    font-weight: lighter;
    color: ${colorsModule.hlog_gray_1};
  }
`;