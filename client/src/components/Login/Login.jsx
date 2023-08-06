import React, { useEffect, useRef } from "react";
import style from '../Login/login.module.css'
import { Form, Formik } from "formik";
import { loginValidationSchema } from "../../ValidactionsSchemas/loginValidation";
import { TextInput } from "../InputText/InputText";
import { useDispatch, useSelector } from "react-redux";
import { getUserByUserName, validateUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: ""
}

export default function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userByUserName = useSelector((state) => state.user.userByUserName)
  const resetFormRef = useRef(null);
  const navigate = useNavigate();

  const loginHandler = async (values, resetForm) => {
    const { username, password } = values;
    await dispatch(validateUser(username, password));
    //dispatch(getUserByUserName(username));
    resetForm();
  }

useEffect(() => {
  if (user.data) {
    const {isActive, isAdmin, isReception} = user.data
    console.log(user.data);
    if (isActive) {
      
      if (isAdmin) {
        navigate("/userDashboard");
      }

      if (isReception) {
        navigate("/superDashboard");
      }

      navigate("/userDashboard")
   }

  }
}, [user]);

  return (
    <div className={style["login-container"]}>
      <div className={style["login"]}>
        <header className={style["login-header"]}>
          <img src="/logoVoiceTeam.png" />

          <br />
          <h1>User Login</h1>
          <h4>VoiceTeam Excellent Food</h4>
          
        </header>

        <section className={style["input-section"]}>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values, actions) => {
              loginHandler(values, actions.resetForm);
            }}
          >
            <Form>
              <TextInput
                label="Name: "
                name="username"
                type="text"
              />
              <TextInput
                label="Password: "
                name="password"
                type="password"
              />
              <div className={style["buttons-group"]}>
                <div className={style["buttons-container"]}>
                  <button type="submit" className={`${style["button"]}`}>Login</button>
                </div>
              </div>
            </Form>

          </Formik>
        </section>

      </div>
    </div>
  )
}