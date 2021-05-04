import { setAlert } from "./alertActions";
import {
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { persistor } from "../store";
import api from "../utils/api";

const saveTokenAndUserInLocalStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
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
    setLoading();
    const res = await api.post("/auth/register", body);
    saveTokenAndUserInLocalStorage(res.data.token, res.data.user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("User added successfully", "success"));
  } catch (err) {
    const error = err.response.data.message;
    dispatch(setAlert(error, "danger"));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    setLoading();
    const res = await api.post("/auth/login", body);

    saveTokenAndUserInLocalStorage(res.data.token, res.data.user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("Sikeresen bejelentkeztél!", "success"));
  } catch (err) {
    const error = err.response.data.message;
    dispatch(setAlert(error, "danger"));
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
  }, 200);
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
