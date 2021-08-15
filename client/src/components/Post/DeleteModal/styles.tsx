import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";

export const DeleteModalContainer = styled.div`
  padding: 1rem;
  background-color: #f2f2f2;
  z-index: 999;
  width: 600px;
  height: 200px;
  ${mixinModules.flexLayoutCenterSort}
  flex-direction: column;

  .buttons {
    width: 100%;
    text-align: center;

    & > button {
      width: 100px;
      margin: 1rem 1rem 0rem 1rem;
    }
  }
`;
