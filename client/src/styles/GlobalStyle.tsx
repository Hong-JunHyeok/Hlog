import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";
import { colorsModule } from "./colors";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          font-family: "Noto Sans KR", sans-serif;
        }
        body {
          margin: 0px;
          padding: 0px;
        }
        .special {
          color: ${colorsModule.hlog_primary};
        }
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.5em;
        }
        h3 {
          font-size: 1.17em;
        }
        h4 {
          font-size: 1em;
        }
        h5 {
          font-size: 0.83em;
        }
        h6 {
          font-size: 0.67em;
        }

        blockquote {
          margin: 1rem 0;
          background-color: ${colorsModule.hlog_gray_3};
          padding: 1rem;
          border-left: 4px solid ${colorsModule.hlog_primary};
          color: ${colorsModule.hlog_dark_2};
        }

        p {
          padding: 1rem 0;
        }

        img {
          max-width: 100%;
        }

        pre {
          margin: 1rem 0;
          box-shadow: rgb(0 0 0 / 2%) 0px 0px 2px;
          background: rgb(251, 252, 253);
          color: rgb(36, 41, 46);
          padding: 1rem;
          & > code {
          }
        }

        a {
          color: rgb(12, 166, 120);
          text-decoration: none;
        }

        strong {
          font-weight: bold;
        }
      `}
    />
  );
};

export default GlobalStyle;
