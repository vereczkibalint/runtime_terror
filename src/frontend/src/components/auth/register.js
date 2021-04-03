import React, { Fragment, useState} from "react";
import { connect } from 'react-redux';
import {Col, Form, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {setAlert} from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    });

    const {first_name, last_name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({first_name, last_name, email, password});
        }
    }

    // Redirect if registered in
    if (isAuthenticated) {
        return <Redirect to={"/dashboard"} />
    }

    return(
        <Fragment>
            <Row>
                <Col xs={12} md={8} lg={6} className={"mx-auto"}>
                    <h1 className={"text-primary text-justify text-center"}>Regisztráció</h1>
                    <p className={"lead"}><i className={"fas fa-user"}/>Készítsd el fiókodat!</p>
                    <Form action={"create-profile.html"} onSubmit={e => onSubmit(e)}>
                        
                        <Form.Group>
                            <input
                                className={"form-control"}
                                type={"text"}
                                placeholder={"Vezetéknév"}
                                name={"last_name"}
                                value={last_name}
                                onChange={e => onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={"form-control"}
                                type={"text"}
                                placeholder={"Keresztnév"}
                                name={"first_name"}
                                value={first_name}
                                onChange={e => onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={"form-control"}
                                type={"email"}
                                placeholder={"Email cím"}
                                name={"email"}
                                value={email}
                                onChange={e => onChange(e)}

                            />
                            
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={"form-control"}
                                type={"password"}
                                placeholder={"Jelszó"}
                                name={"password"}
                                value={password}
                                onChange={e => onChange(e)}

                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={"form-control"}
                                type={"password"}
                                placeholder={"Jelszó megerősítése"}
                                name={"password2"}
                                value={password2}
                                onChange={e => onChange(e)}

                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type={"submit"}
                                className={"btn btn-primary btn-block"}
                                value={"Regisztráció"}
                            />
                        </Form.Group>
                    </Form>
                    <p className={"my-1"}>
                        Már rendelkezel fiókkal? <Link to={"/login"} className={"text-info font-weight-bold"}>Bejelentkezés</Link>
                    </p>
                </Col>
            </Row>
        </Fragment>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {setAlert, register}
)(Register);