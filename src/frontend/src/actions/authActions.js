import axios from "axios";
import { setAlert } from "./alertActions";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { persistor } from "../store";
import api from "../utils/api";

// Load user
export const loadUser = () => {
  setAuthToken();
};

// Register User
export const register = ({
  lastName,
  firstName,
  email,
  password,
  passwordConfirm,
}) => async (dispatch) => {
  const body = JSON.stringify({
    lastName,
    firstName,
    email,
    password,
    passwordConfirm,
  });

  try {
    const res = await api.post("/auth/register", body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("User added successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post("/auth/login", body);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("Logged in", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout - Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
  setTimeout(() => {
    persistor.purge();
    setAuthToken();
  }, 200);
};
