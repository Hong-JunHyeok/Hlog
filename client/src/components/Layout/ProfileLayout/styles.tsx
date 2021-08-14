import styled from "@emotion/styled";
import { mixinModules } from "../../../styles/modules";
import { sizesModule } from "../../../styles/sizes";

export const StyledProfileLayout = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > h1 {
    font-size: ${sizesModule.bigFontSize};
    font-weight: bold;
  }
  margin-top: 3rem;
  form {
    margin-top: 10px;
  }
  .profile-header {
    display: flex;
    align-items: center;
    & > button {
      margin-left: 2rem;
    }
  }
  .user-post-conainer {
    width: 100%;
    ${mixinModules.flexLayoutCenterSort}
    flex-direction: column;
    max-width: 800px;
  }
`;
