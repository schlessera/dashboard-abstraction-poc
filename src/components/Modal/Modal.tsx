import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="storybook-modal-overlay" onClick={onClose}>
      <div className="storybook-modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};