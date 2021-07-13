import Link from 'next/link';

const ModalOption = ({ props }) => (
  <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>Modal body content</Modal.Body>
  </Modal>
);

export default ModalOption;
