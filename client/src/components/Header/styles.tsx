import styled from "@emotion/styled";
import { mixinModules } from "../../styles/modules";
import { sizesModule } from "../../styles/sizes";

export const StyledHeader = styled.header`
  padding: 1rem 0;
  width: 100%;
  height: ${sizesModule.headerHeight};
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  ${mixinModules.flexLayoutCenterSort}
  z-index: 10;
  .container {
    ${mixinModules.flexLayoutCenterSort}
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${sizesModule.pageMaxWidth};
    margin: 0 auto;
    & > .logo {
      font-weight: bold;
      font-size: ${sizesModule.bigFontSize};
      cursor: pointer;
    }
    & > .menus {
      display: flex;
      font-size: 18px;
      & > li {
        ${mixinModules.flexLayoutCenterSort}
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
`;
