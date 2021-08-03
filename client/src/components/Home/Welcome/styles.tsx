import styled from "@emotion/styled";
import { mixinModules } from "../../../styles/modules";

export const StyledWelcome = styled.h1`
  font-size: 150px;
  ${mixinModules.flexLayoutCenterSort}
  margin-top: 20%;
  font-weight: bold;
`;
