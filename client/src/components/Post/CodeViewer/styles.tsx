import styled from "@emotion/styled";
import { sizesModule } from "../../../styles/sizes";

export const CodeViewContainer = styled.div`
  background-color: white;

  padding: 5rem 2rem;
  height: 100%;
  overflow-y: auto;
  .view-title {
    font-weight: bold;
    font-size: ${sizesModule.bigFontSize};
  }
  .view-content {
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
