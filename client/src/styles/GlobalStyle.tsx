import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0px;
          padding: 0px;
          font-family: "NanumSquare", sans-serif !important;
        }
      `}
    />
  );
};

export default GlobalStyle;
