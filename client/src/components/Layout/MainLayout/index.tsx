import { FC } from "react";
import FooterComponent from "../../Footer";
import HeaderComponent from "../../Header";
import { StyledLayout } from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent></FooterComponent>
    </StyledLayout>
  );
};

export default Layout;
