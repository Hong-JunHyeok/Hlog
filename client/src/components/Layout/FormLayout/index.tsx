import { FC } from "react";
import { useLink } from "../../../hooks/useLink";
import { FormContainer } from "./styles";

interface Props {
  formTitle: string;
}

const FormLayout: FC<Props> = ({ formTitle, children }) => {
  const { handlePushLink: handlePushHome } = useLink("/");

  return (
    <FormContainer className="form">
      <header className="form-header">
        <h1 className="logo" onClick={handlePushHome}>
          HLOG
        </h1>
        <h2>{formTitle}</h2>
      </header>
      {children}
      <footer className="form-footer">
        Copyright ⓒ 2021~ Hlog. All rights reserved.
      </footer>
    </FormContainer>
  );
};

export default FormLayout;
