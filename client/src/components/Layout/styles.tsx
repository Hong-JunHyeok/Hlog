import styled from "@emotion/styled";
import { sizesModule } from "../../styles/sizes";

export const StyledLayout = styled.div`
  main {
    max-width: ${sizesModule.pageMaxWidth};
    margin: 0 auto;
    padding-top: ${sizesModule.headerHeight};
    min-height: 80vh;
  }
`;
