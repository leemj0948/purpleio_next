import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';

const ModalOption = ({ show, setShow, fullscreen, clickId }) => {
  const { name, description, image, url } = clickId;
  return (
    <Modal
      show={show}
      fullscreen={fullscreen}
      size="xl"
      onHide={() => setShow(false)}
    >
      <Modal.Body style={titleStyle} closeButton>
        <section className="contents">
          <div className="img">
            <img src={image} alt="img" />
          </div>
          <div className="body">
            <header className="title">
              <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
            </header>
            <body>{description}</body>
            <footer>홈페이지 주소 : {url}</footer>
          </div>
        </section>
      </Modal.Body>
      <style jsx>{`
        .contents {
          display: flex;
        }
        img {
          width: 688px;
        }
        body {
          font-family: Gotham A, Gotham B, DIN, sans-serif;
          font-weight: 500;
          color: #343a40;
          font-size: 1rem;
          line-height: 166%;
          padding: 3rem 1.2rem;
          width: 100%;
        }
        footer {
          font-family: Gotham A, Gotham B, DIN, sans-serif;
          font-weight: 500;
          color: #343a40;
          font-size: 1rem;
          line-height: 166%;
          padding: 3rem 1.2rem;
          width: 100%;
        }
      `}</style>
    </Modal>
  );
};
const titleStyle = {
  margin: '0',
  padding: '0',
  borderRadius: '5px',
  whiteSpace: 'break-spaces',
};
export default ModalOption;
