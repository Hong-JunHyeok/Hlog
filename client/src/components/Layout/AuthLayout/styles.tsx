import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";

export const AuthLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colorsModule.hlog_gray_3};
  ${mixinModules.flexLayoutCenterSort}
  justify-content: center;
`;
