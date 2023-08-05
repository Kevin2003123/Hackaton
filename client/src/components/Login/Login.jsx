import React, { useEffect, useRef } from "react";
import style from '../Login/login.module.css'
import { Form, Formik } from "formik";
import { loginValidationSchema } from "../../ValidactionsSchemas/loginValidation";
import { TextInput } from "../InputText/InputText";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../../redux/actions/user";
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: ""
}

export default function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const resetFormRef = useRef(null);
  const navigate = useNavigate();

  const loginHandler = async (values, resetForm) => {
    const { username, password } = values;
    await dispatch(validateUser(username, password));
    resetForm();
  }

useEffect(() => {
  if (user.data) {
    const {isActive, isAdmin, isReception} = user.data

    if (isActive) {
      
      if (isAdmin) {
        navigate("/userDashboard");
      }

      if (isReception) {
        navigate("/superDashboard");
      }

      navigate("/userDashboard");
    }

  }
}, [user]);

  return (
    <div className={style["login-container"]}>
      <div className={style["login"]}>
        <header className={style["login-header"]}>
          <h2>Login</h2>
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
                label="Nombre: "
                name="username"
                type="text"
              />
              <TextInput
                label="password: "
                name="password"
                type="password"
              />
              <div className={style["buttons-group"]}>
                <Col xl={12}>
                  <button type="submit" className={`${style["button"]}`}>Login</button>
                </Col>
              </div>
            </Form>

          </Formik>
        </section>

      </div>
    </div>
  )
}