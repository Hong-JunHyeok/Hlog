import { getCurrentYear } from "../../utils/getCurrentYear";
import { StyledFooter } from "./styles";

const FooterComponent = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div>2017-{getCurrentYear()} HLOG All rights reserved.</div>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;
