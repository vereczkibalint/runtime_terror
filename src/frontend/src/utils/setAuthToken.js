import axios from "axios";

const setAuthToken = () => {
  const auth = JSON.parse(localStorage.getItem("persist:root"));
  const token = JSON.parse(auth.auth).token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
