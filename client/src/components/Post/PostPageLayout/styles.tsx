import styled from "@emotion/styled";
import { sizesModule } from "../../../styles/sizes";

export const StyledPostPageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    margin-top: 40px;
    font-size: ${sizesModule.middleFontSize};

    .nav-item {
      padding: 5px 10px;
      cursor: pointer;
    }
  }
  .post-conainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: ${sizesModule.pageMaxWidth}) {
      flex-direction: column;
      align-items: center;
      & > div {
        width: 80%;
      }
    }
  }
`;
