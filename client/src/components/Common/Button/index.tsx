import { SerializedStyles } from "@emotion/utils";
import { CSSProperties, FC } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  buttonColor?: string;
  buttonTextColor?: string;
  customStyle?: CSSProperties | SerializedStyles;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children,
  buttonColor,
  buttonTextColor,
  customStyle,
}) => {
  return (
    <StyledButton
      buttonBackgroundColor={buttonColor}
      buttonTextColor={buttonTextColor}
      style={customStyle}
    >
      {children}
    </StyledButton>
  );
};
