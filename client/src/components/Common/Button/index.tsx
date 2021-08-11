import { SerializedStyles } from "@emotion/utils";
import { CSSProperties, FC, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  buttonColor?: string;
  buttonTextColor?: string;
  customStyle?: CSSProperties;
  buttonHover?: boolean;
  handleFunc?: (...args: any) => void;
  loading?: boolean;
  loadingMsg?: string;
}

export const ButtonComponent: FC<ButtonProps> = ({
  children,
  buttonColor,
  buttonTextColor,
  customStyle,
  buttonHover,
  handleFunc,
  loading,
  loadingMsg,
}) => {
  return (
    <StyledButton
      buttonBackgroundColor={buttonColor}
      buttonTextColor={buttonTextColor}
      style={customStyle}
      buttonHover={buttonHover}
      onClick={handleFunc}
    >
      {loading ? (loadingMsg ? loadingMsg : "Loading...") : children}
    </StyledButton>
  );
};

ButtonComponent.defaultProps = {
  buttonHover: true,
};
