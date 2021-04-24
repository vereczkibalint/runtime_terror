import React, { Fragment, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { Formik } from "formik";
import * as yup from "yup";

const Login = ({ login, isAuthenticated, loading, errors }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = (values) => {
    login(values.email, values.password);
    setFormData({ email: values.email, password: "" });
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Hibás email formátum")
      .required("Az email cím megadása kötelező"),
    password: yup
      .string()
      .min(6, "A jeslzónak legalább 6 karakterből kell állnia")
      .required("A jelszó megadása kötelező"),
  });

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <Fragment>
      <Row>
        <Col xs={12} md={8} lg={6} className={"mx-auto mt-5"}>
          <h1 className={"text-primary text-justify text-center"}>
            Bejelentkezés
          </h1>
          <p className={"lead"}>
            <i className={"fas fa-user"} /> Jelentkezz be a fiókodba!
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
              isSubmitting,
              isValid,
              errors,
            }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group>
                  <Form.Control
                    type={"email"}
                    name={"email"}
                    placeholder={"Email cím"}
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                    autoComplete="off"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type={"password"}
                    placeholder={"Jelszó"}
                    name={"password"}
                    minLength={"6"}
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={touched.password && errors.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <input
                    type={"submit"}
                    className={"btn btn-primary btn-block"}
                    value={"Bejelentkezés"}
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
          <p className={"my-1"}>
            Nem rendelkezel fiókkal?{" "}
            <Link to={"/register"} className={"text-info font-weight-bold"}>
              Regisztráció
            </Link>
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { login })(Login);
