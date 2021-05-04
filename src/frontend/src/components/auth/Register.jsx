import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alertActions";
import { register } from "../../actions/authActions";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormSubmit = ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  }) => {
    register(firstName, lastName, email, password, passwordConfirm);
    setFormData({
      firstName,
      lastName,
      email,
      password: "",
      passwordConfirm: "",
    });
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("A vezetéknév kitöltése kötelező!"),
    lastName: yup.string().required("A keresztnév megadása kötelező!"),
    email: yup
      .string()
      .email("Hibás email formátum")
      .required("Az email cím megadása kötelező"),
    password: yup
      .string()
      .min(6, "A jeszónak legalább 6 karakterből kell állnia")
      .required("A jelszó megadása kötelező"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "A két jelszó nem egyezik!"),
  });

  // Redirect if registered in
  if (isAuthenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <Fragment>
      <Row>
        <Col xs={12} md={8} lg={6} className={"mx-auto"}>
          <h1 className={"text-primary text-justify text-center"}>
            Regisztráció
          </h1>
          <p className={"lead"}>
            <i className={"fas fa-user"} />
            Készítsd el fiókodat!
          </p>
          <Formik
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleFormSubmit(values);
              resetForm({
                values: { ...formData },
              });
            }}
            initialValues={formData}
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
              <Form
                action={"create-profile.html"}
                onSubmit={handleSubmit}
                noValidate
              >
                <Form.Group>
                  <Form.Control
                    className={"form-control text-center"}
                    type={"text"}
                    placeholder={"Vezetéknév"}
                    name={"lastName"}
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className={"form-control text-center"}
                    type={"text"}
                    placeholder={"Keresztnév"}
                    name={"firstName"}
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className={"form-control text-center"}
                    type={"email"}
                    placeholder={"Email cím"}
                    name={"email"}
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className={"form-control text-center"}
                    type={"password"}
                    placeholder={"Jelszó"}
                    name={"password"}
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className={"form-control text-center"}
                    type={"password"}
                    placeholder={"Jelszó megerősítése"}
                    name={"passwordConfirm"}
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    isValid={touched.passwordConfirm && !errors.passwordConfirm}
                    isInvalid={errors.passwordConfirm}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirm}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type={"submit"}
                    className={"btn btn-primary btn-block"}
                    value={"Regisztráció"}
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
          <p className={"my-1"}>
            Már rendelkezel fiókkal?{" "}
            <Link to={"/login"} className={"text-info font-weight-bold"}>
              Bejelentkezés
            </Link>
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
