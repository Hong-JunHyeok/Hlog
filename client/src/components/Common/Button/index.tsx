import { SerializedStyles } from "@emotion/utils";
import { CSSProperties, FC, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  buttonColor?: string;
  buttonTextColor?: string;
  customStyle?: CSSProperties | SerializedStyles;
  buttonHover?: boolean;
  handleFunc?: () => void;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children,
  buttonColor,
  buttonTextColor,
  customStyle,
  buttonHover,
  handleFunc,
}) => {
  return (
    <StyledButton
      buttonBackgroundColor={buttonColor}
      buttonTextColor={buttonTextColor}
      style={customStyle}
      buttonHover={buttonHover}
      onClick={handleFunc}
    >
      {children}
    </StyledButton>
  );
};

ButtonComponent.defaultProps = {
  buttonHover: true,
};
