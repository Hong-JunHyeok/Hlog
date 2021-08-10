import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";
import { mixinModules } from "../../../styles/modules";

export const ModalContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 1.5rem;
  background-color: white;
  z-index: 999;
  .publish_title {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .publish_content {
    word-break: break-all;
    width: 50%;
    padding: 1rem;
    background-color: ${colorsModule.hlog_gray_3};
    margin-bottom: 2rem;
  }

  .publish_thumnail {
    padding-top: 1rem;
    flex-direction: column;
    ${mixinModules.flexLayoutCenterSort}
  }
`;
