
import { GET_USERS, GET_USERS2, USER_VALIDATE } from "./action-type"
import axios2 from "../../axios"
import axios from "axios"

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios2.get("/users");
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsers2 = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios2.get("/users");
      return dispatch({
        type: GET_USERS2,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const validateUser = (username, password) => {
  return async (dispatch) => {
    try {
      let formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data' // Configura el encabezado adecuado para FormData
        }
      };

      const { data } = await axios.post("/user/validate", formData, config);

      dispatch({
        type: USER_VALIDATE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

};