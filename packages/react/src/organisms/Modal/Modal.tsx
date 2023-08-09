import React from 'react';
import Text from '../../atoms/Text/Text';
import { Sizes } from '../../molecules/Button/Button.stories';
import Icon from '../../atoms/Icon/Icon';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  className?: string;
  containerClassName?: string;
};

type ModalHeaderProps = {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  fontSize?: keyof typeof Sizes;
};

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

function Modal({
  children,
  onClose,
  isOpen,
  containerClassName: customContainerClassName = '',
  className: customClassName = '',
}: ModalProps) {
  const className = `dse-modal ${customClassName}`;
  const containerClassName = `dse-modal-container ${
    isOpen ? 'dse-modal-container__open' : 'dse-modal-container__close'
  } ${customContainerClassName}`;

  return (
    <div onClick={onClose} className={containerClassName}>
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.Header = function ModalHeader({
  children,
  onClose,
  className: customClassName = '',
  fontSize,
}: ModalHeaderProps) {
  const className = `dse-modal-header ${customClassName}`;
  return (
    <div className={className}>
      <Text size={fontSize}>{children}</Text>
      <button onClick={onClose}>
        <Icon size={fontSize} icon="x-mark" />
      </button>
    </div>
  );
};

Modal.Body = function ModalBody({
  children,
  className: customClassName = '',
}: ModalBodyProps) {
  const className = `dse-modal-body ${customClassName}`;
  return <div className={className}>{children}</div>;
};

Modal.Footer = function ModalFooter({
  children,
  className: customClassName = '',
}: ModalFooterProps) {
  const className = `dse-modal-footer ${customClassName}`;
  return <div className={className}>{children}</div>;
};

export default Modal;
