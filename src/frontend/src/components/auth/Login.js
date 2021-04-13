import React, { Fragment, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email,password);
    }

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to={"/dashboard"} />
    }

    return(
        <Fragment>
            <Row>
                <Col xs={12} md={8} lg={6} className={"mx-auto"}>
                    <h1 className={"text-primary text-justify text-center"}>Bejelentkezés</h1>
                    <p className={"lead"}><i className={"fas fa-user"}/> Jelentkezz be fiókodba</p>
                    <Form action={"create-profile.html"} onSubmit={e => onSubmit(e)}>
                        <Form.Group>
                            <input
                                className={"form-control text-center"}
                                type={"email"}
                                placeholder={"Email cím"}
                                name={"email"}
                                value={email}
                                onChange={e => onChange(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={"form-control text-center"}
                                type={"password"}
                                placeholder={"Jelszó"}
                                name={"password"}
                                minLength={"6"}
                                value={password}
                                onChange={e => onChange(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type={"submit"}
                                className={"btn btn-primary btn-block"}
                                value={"Bejelentkezés"}
                            />
                        </Form.Group>
                    </Form>
                    <p className={"my-1"}>
                        Nem rendelkezel fiókkal? <Link to={"/register"} className={"text-info font-weight-bold"}>Regisztráció</Link>
                    </p>
                </Col>
            </Row>
        </Fragment>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);