import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { MainModal } from './components/MainModal';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="h-100 text-center mt-5 pt-5">
            <Button variant="light" onClick={() => setShow(true)}>
              Record Video
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        centered
      >
        <MainModal />
      </Modal>
    </Fragment>
  );
};

export default App;
