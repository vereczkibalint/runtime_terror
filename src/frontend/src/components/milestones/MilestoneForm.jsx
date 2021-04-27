import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addMilestone,
  updateMilestone,
  clearCurrent,
} from "../../actions/milestoneActions";

const MilestoneForm = ({
  show,
  handleClose,
  addAccount,
  updateAccount,
  clearCurrent,
  current,
  title,
  userId,
}) => {
  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(0, 6);

  const [milestone, setMilestone] = useState({
    owner: userId,
    type: "cash",
    name: "",
    color: randomColor(),
    balance: 1,
  });

  useEffect(() => {
    if (current != null) {
      setMilestone(current);
    } else {
      setMilestone({
        owner: userId,
        type: "cash",
        name: "",
        color: randomColor(),
        balance: 1,
      });
    }
  }, [current, show, userId]);

  const handleFormSubmit = (values) => {
    const newMilestone = {
      owner: userId,
      type: values.type,
      name: values.name,
      color: values.color,
      balance: values.balance,
    };
    if (current) {
      updateMilestone(newMilestone);
    } else {
      addMilestone(newMilestone);
    }
    handleClose();
  };

  const validationSchema = yup.object({
    name: yup.string().required("A név megadása kötelező"),
    color: yup.string().required("A szín megadása kötelező"),
    balance: yup
      .number()
      .positive("Az egyenlegnek 0-nál nagyobbnak kell lennie")
      .required("Az egyenleg megadása kötelező"),
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          initialValues={account}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            dirty,
            isSubmitting,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="name">
                <Form.Label>Név</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Név"
                  name={"name"}
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={errors.name}
                  autoComplete="off"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Típus</Form.Label>
                <Form.Control
                  as="select"
                  name={"type"}
                  onChange={handleChange}
                  required
                >
                  <option value="cash">Készpénz</option>
                  <option value="bank">Bank</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Szín</Form.Label>
                <Form.Control
                  type="color"
                  title="Válasszon színt"
                  name="color"
                  value={values.color}
                  onChange={handleChange}
                  isValid={touched.color && !errors.color}
                  isInvalid={errors.color}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.color}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="balance">
                <Form.Label>Egyenleg</Form.Label>
                <Form.Control
                  type="number"
                  value={values.balance}
                  onChange={handleChange}
                  name="balance"
                  isValid={touched.balance && !errors.balance}
                  isInvalid={errors.balance}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.balance}
                </Form.Control.Feedback>
              </Form.Group>
              <hr />

              <div className="d-flex justify-content-between">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Bezárás
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Mentés
                </Button>
              </div>
            </Form>
          )}
        </Formik>
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
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.accounts.current,
  userId: state.auth.user.user._id,
});

export default connect(mapStateToProps, {
  addMilestone,
  updateMilestone,
  clearCurrent,
})(MilestoneForm);
