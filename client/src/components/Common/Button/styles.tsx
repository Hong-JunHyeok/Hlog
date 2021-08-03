import styled from "@emotion/styled";
import { colorsModule } from "../../../styles/colors";

interface IProps {
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonHover?: boolean;
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
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    ${(props) =>
      props.buttonHover &&
      "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
  }
`;
