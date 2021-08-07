import axios from "axios";

const ssrCookiePender = (req: any): void => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
};

export default ssrCookiePender;
