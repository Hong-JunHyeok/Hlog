import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";

interface IProps {
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

export const StyledButton = styled.button<IProps>`
  border: 0px;
  background-color: ${(props) =>
    props.buttonBackgroundColor || colorsModule.hlog_primary};
  color: ${(props) => props.buttonTextColor || colorsModule.hlog_gray_3};
  font-size: 18px;
  border-radius: 10px;
  width: 280px;
  height: 50px;
`;
