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
  addMilestone,
  updateMilestone,
  clearCurrent,
  current,
  title,
  userId,
}) => {
  // Helper variable for date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [milestone, setMilestone] = useState({
    owner: userId,
    name: "",
    goalPrice: 1,
    deadine: new Date(),
  });

  useEffect(() => {
    if (current != null) {
      setMilestone(current);
    } else {
      setMilestone({
        owner: userId,
        name: "",
        goalPrice: 1,
        deadline: new Date(),
      });
    }
  }, [current, show, userId]);

  const handleFormSubmit = (values) => {
    const newMilestone = {
      owner: userId,
      name: values.name,
      goalPrice: values.goalPrice,
      deadline: values.deadline,
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
    goalPrice: yup
      .number()
      .positive("A célösszegnek 0-nál nagyobbnak kell lennie")
      .required("Az célösszeg megadása kötelező"),
    deadline: yup
      .date("Kérjük adja meg a dátumot")
      .min(new Date(), "A legkorábbi dátum a következő nap")
      .required("A határidő megadása kötelező"),
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
          initialValues={milestone}
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

              <Form.Group controlId="balance">
                <Form.Label>Célösszeg</Form.Label>
                <Form.Control
                  type="number"
                  value={values.goalPrice}
                  onChange={handleChange}
                  name="goalPrice"
                  isValid={touched.goalPrice && !errors.goalPrice}
                  isInvalid={errors.goalPrice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.goalPrice}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="balance">
                <Form.Label>Határidő</Form.Label>
                <Form.Control
                  type="date"
                  value={values.deadline}
                  onChange={handleChange}
                  name="deadline"
                  isValid={touched.deadline && !errors.deadline}
                  isInvalid={errors.deadline}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.deadline}
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

MilestoneForm.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  addMilestone: PropTypes.func.isRequired,
  updateMilestone: PropTypes.func.isRequired,
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
