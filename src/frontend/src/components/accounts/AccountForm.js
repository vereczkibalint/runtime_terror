import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addAccount,
  updateAccount,
  clearCurrent,
} from "../../actions/accountActions";

const AccountForm = ({
  show,
  handleClose,
  addAccount,
  updateAccount,
  clearCurrent,
  current,
}) => {
  const [account, setAccount] = useState({
    owner: "",
    type: 0,
    name: "",
    color: "",
    balance: 0,
  });

  useEffect(() => {
    if (current != null) {
      setAccount(current);
    } else {
      setAccount({
        owner: "",
        type: 0,
        name: "",
        color: "",
        balance: 0,
      });
    }
  }, [current]);

  const onChange = (e) =>
    setAccount({ ...account, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addAccount(account);
    } else {
      clearAll();
      updateAccount(account);
    }
    setAccount({
      owner: "",
      type: 0,
      name: "",
      color: "",
      balance: 0,
    });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Számla hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Név</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label>Szín</Form.Label>
            <Form.Control type="color" title="Choose your color" />
          </Form.Group>

          <Form.Group controlId="balance">
            <Form.Label>Egyenleg</Form.Label>
            <Form.Control type="number" value="0" />
          </Form.Group>

          <hr />

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Bezárás
            </Button>
            <Button variant="primary" type="submit">
              Mentés
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

AccountForm.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  addAccount: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.accounts.current,
});

export default connect(mapStateToProps, {
  addAccount,
  updateAccount,
  clearCurrent,
})(AccountForm);
