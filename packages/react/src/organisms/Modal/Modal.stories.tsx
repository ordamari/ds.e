import React from 'react';
import Modal from './Modal';
import Button from '../../molecules/Button/Button';
import { useToggle } from '@or.ds.e/hooks';
import '@or.ds.e/scss/lib/Modal.css';

export default {
  title: 'Organisms/Modal',
};

function Test() {
  const [isOpen, toggleIsOpen] = useToggle();
  return (
    <>
      <Button onClick={toggleIsOpen}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={toggleIsOpen}>
        <Modal.Header onClose={toggleIsOpen}>Modal header</Modal.Header>
        <Modal.Body>
          <p>Modal body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleIsOpen}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export const Common = () => <Test />;
