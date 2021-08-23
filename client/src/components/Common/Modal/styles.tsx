import styled from "@emotion/styled";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.4);

  ${mixinModules.flexLayoutCenterSort}
`;

export const ModalContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  h1 {
    font-size: ${sizesModule.middleFontSize};
  }
  span {
  }
`;
