import { VFC } from "react";
import { ButtonComponent } from "../Button";
import { ModalContainer, ModalLayout } from "./styles";

interface IModalProps {
  title: string;
  content: React.ReactChild;
}

const ModalComponent: VFC<IModalProps> = ({ title, content }) => {
  return (
    <ModalLayout>
      <ModalContainer>
        <h1>{title}</h1>
        <span>{content}</span>
        <ButtonComponent>확인</ButtonComponent>
      </ModalContainer>
    </ModalLayout>
  );
};

export default ModalComponent;
