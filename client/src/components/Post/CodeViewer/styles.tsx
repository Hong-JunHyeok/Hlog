import styled from "@emotion/styled";
import { sizesModule } from "../../../styles/sizes";

export const CodeViewContainer = styled.div`
  background-color: white;
  padding: 5rem 2rem;
  height: 100%;
  overflow-y: auto;

  .view-title {
    width: 100%;
    word-break: break-all;
    font-weight: bold;
    font-size: ${sizesModule.bigFontSize};
  }
  .view-content {
    width: 100%;
    word-break: break-all;
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
