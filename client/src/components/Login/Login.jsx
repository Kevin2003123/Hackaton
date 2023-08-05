import React from "react";
import style from '../Login/login.module.css'
import { Form, Formik } from "formik";
import { loginValidationSchema } from "../../ValidactionsSchemas/loginValidation";
import { TextInput } from "../InputText/InputText";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../../redux/actions/user";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialValues = {
  username: "",
  password: ""
}

export default function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const loginHandler = (values, resetForm) => {
    const { username, password } = values;
    dispatch(validateUser(username, password));
  }

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
            }}  >
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
              <Row className={style["buttons-group"]}>
                <Col xl={12}>
                  <button type="submit" className="btn btn-primary">Login(users)</button>
                  <button type="submit" className="btn btn-primary">Login(Restaurants)</button>
                </Col>
                <Col xl={12}>
                  <button type="submit" className="btn btn-primary">Login(Admin)</button>
                  <button type="submit" className="btn btn-primary">Login(Supervisor)</button>
                </Col>
              </Row>
            </Form>

          </Formik>
        </section>

      </div>
    </div>
  )
}