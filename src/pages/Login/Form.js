import React from "react";
import history from "../../utils/history";
import FormContainer from "../../components/FormContainer";
import { Container } from "react-bootstrap";
import { Router, NavLink } from "react-router-dom";
import { FullWidthButton } from "../../components/Button";
import { Input } from "../../components/Input";

const Form = (props) => {
  return (
    <Container>
      <FormContainer>
        <div className="form-container">
          <form
            className="form-main-container"
            onSubmit={props.formik.handleSubmit}
          >
            <h1>Login</h1>
            <Input
              id="username"
              type="username"
              onChange={props.formik.handleChange}
              name="username"
              onBlur={props.formik.handleBlur}
              title="Username"
              value={props.formik.values.username}
              errors={props.formik.errors}
              dataTestId="username"
              ariaLabel="username"
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

            <div className="form-items sign-up-text">
              <Router history={history}>
                <NavLink to="/signup">Sign Up?</NavLink>
              </Router>
            </div>
            <div className="form-button-container">
              <FullWidthButton
                type="submit"
                name="Login"
                dataTestId="login"
                isLoading={props.isLoading}
              />
            </div>
          </form>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Form;
