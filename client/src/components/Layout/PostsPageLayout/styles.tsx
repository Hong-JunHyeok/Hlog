import styled from "@emotion/styled";
import { sizesModule } from "../../../styles/sizes";

export const StyledPostPageLayout = styled.div`
  .no-posts {
    padding: 20vh;
    text-align: center;
  }

  nav {
    display: flex;
    margin-top: 40px;
    font-size: ${sizesModule.middleFontSize};
    justify-content: space-between;
    .post-sorter {
      display: flex;
      .nav-item {
        padding: 5px 10px;
        cursor: pointer;
      }
    }
  }
  .post-conainer {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
