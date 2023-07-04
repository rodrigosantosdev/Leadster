import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from "./style";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // O modal não será renderizado se isOpen for falso
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          X
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

