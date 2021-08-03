import { SerializedStyles } from "@emotion/utils";
import { CSSProperties, FC } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  buttonColor?: string;
  buttonTextColor?: string;
  customStyle?: CSSProperties | SerializedStyles;
  buttonHover?: boolean;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children,
  buttonColor,
  buttonTextColor,
  customStyle,
  buttonHover,
}) => {
  return (
    <StyledButton
      buttonBackgroundColor={buttonColor}
      buttonTextColor={buttonTextColor}
      style={customStyle}
      buttonHover={buttonHover}
    >
      {children}
    </StyledButton>
  );
};

ButtonComponent.defaultProps = {
  buttonHover: true,
};
