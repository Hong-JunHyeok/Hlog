import styled from "@emotion/styled";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  position: "top" | "bottom" | "center";
}

const Container = styled.div<IModalProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.position === "top"
      ? "flex-start"
      : props.position === "center"
      ? "center"
      : props.position === "bottom"
      ? "flex-end"
      : "center"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const useModal = ({ position }: IModalProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: React.ReactNode;
  }

  const ModalPortal: React.FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <Container position={position}>
          <div
            className="modal-background"
            role="presentation"
            onClick={closeModal}
          />
          {children}
        </Container>,
        ref.current,
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;
