import React, { useEffect } from "react";
import {  Button,  Container, Form, } from "react-bootstrap";
import "../assets/css/Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BgLogo } from "../assets/images";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { AuthLogin } from "../action/PostSlice";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state) => state.posts.data);
  const error = useSelector((state) => state.posts.isError);

  useEffect(() => {
    resultLogin();
  }, [data, error]);

  const resultLogin = () => {
    if (data !== null) {
        sessionStorage.setItem("AccessToken", data.token)
      Swal.fire("Success", "Login Success", "success").then(() =>
        history.push("/Home")
      );
    } else if (error !== null) {
      Swal.fire("Login Failed", "Please Try Agin", "error");
    } else {
    }
  };

  const handleLogin = (er) => {
    if (er.email || er.password === "Required!") {
      Swal.fire("Login please complete it first", "Please Try Agin", "error");
    } else {
      dispatch(AuthLogin(formik.values));
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required!"),
      password: Yup.string().required("Required!"),
    }),
  });

  return (
    <>
      <Container className="text-center">
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
        </h1>
        {/* <Row className="mt-5"> */}

        <div className="login ">
          <img className="loginBg" src={BgLogo} alt="" />
        <div className="login-form">
          <form onSubmit={formik.handleSubmit} className="login-input">
            <Form.Control
              type="email"
              placeholder="Username"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-error">{formik.errors.email}</p>
            )}

            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-error">{formik.errors.password}</p>
            )}

            <Button
              variant="success btn-block"
              type="submit"
              onClick={() => handleLogin(formik.errors)}
            >
              Login
            </Button>
          </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
