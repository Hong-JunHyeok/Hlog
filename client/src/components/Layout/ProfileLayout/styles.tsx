import styled from "@emotion/styled";
import { sizesModule } from "../../../styles/sizes";

export const StyledProfileLayout = styled.div`
  & > h1 {
    font-size: ${sizesModule.bigFontSize};
    font-weight: bold;
  }
  margin-top: 3rem;
  form {
    margin-top: 10px;
  }
`;
