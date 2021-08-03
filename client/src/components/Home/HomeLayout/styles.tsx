import styled from "@emotion/styled";
import { mixinModules } from "../../../styles/modules";

export const StyledHomeLayout = styled.div`
  ${mixinModules.flexLayoutCenterSort}
  flex-direction: column;
  & > button {
    margin-top: 100px;
  }
`;
