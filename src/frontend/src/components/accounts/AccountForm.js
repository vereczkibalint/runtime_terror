import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AccountForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control type="color" title="Choose your color" />
          </Form.Group>

          <Form.Group controlId="balance">
            <Form.Label>Balance</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <hr />

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AccountForm;
