import styled from "@emotion/styled";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const StyledPostPageLayout = styled.div`
  nav {
    display: flex;
    margin-top: 40px;
    font-size: ${sizesModule.bigFontSize};

    .nav-item {
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;
