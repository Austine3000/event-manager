import React from "react";
import history from "../../utils/history";
import AuthContainer from "../../components/AuthContainer";
import { Container } from "react-bootstrap";
import { Router, NavLink } from "react-router-dom";
import { FullWidthButton } from "../../components/Button";
import { Input } from "../../components/Input";

const Form = (props) => {
  return (
    <Container>
      <AuthContainer>
        <div className="auth-container">
          <form
            className="auth-main-container"
            onSubmit={props.formik.handleSubmit}
          >
            <h1>Login</h1>
            <Input
              id="email"
              type="email"
              onChange={props.formik.handleChange}
              name="email"
              onBlur={props.formik.handleBlur}
              title="Email"
              value={props.formik.values.email}
              errors={props.formik.errors}
              dataTestId="email"
              ariaLabel="email"
            />
            <Input
              id="password"
              type="password"
              onChange={props.formik.handleChange}
              name="password"
              onBlur={props.formik.handleBlur}
              title="Password"
              value={props.formik.values.password}
              errors={props.formik.errors}
              dataTestId="password"
              ariaLabel="Password"
            />

            <div className="auth-form-items sign-up-text">
              <Router history={history}>
                <NavLink to="/">Sign Up?</NavLink>
              </Router>
            </div>
            <div className="auth-form-button-container">
              <FullWidthButton
                type="submit"
                name="Login"
                dataTestId="login"
                isLoading={props.isLoading}
              />
            </div>
          </form>
        </div>
      </AuthContainer>
    </Container>
  );
};

export default Form;
