import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import history from "../../utils/history";
import FormContainer from "../../components/FormContainer";
import { Container, Row, Col } from "react-bootstrap";
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
            <h1>Sign Up</h1>
            <Row>
              <Col lg="6">
                <Input
                  id="firstname"
                  type="text"
                  onChange={props.formik.handleChange}
                  name="firstname"
                  onBlur={props.formik.handleBlur}
                  title="First Name"
                  value={props.formik.values.firstname}
                  errors={props.formik.errors}
                  dataTestId="firstname"
                  ariaLabel="firstname"
                />
              </Col>
              <Col lg="6">
                <Input
                  id="lastname"
                  type="text"
                  onChange={props.formik.handleChange}
                  name="lastname"
                  onBlur={props.formik.handleBlur}
                  title="Last Name"
                  value={props.formik.values.lastname}
                  errors={props.formik.errors}
                  dataTestId="lastname"
                  ariaLabel="lastname"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Input
                  id="username"
                  type="text"
                  onChange={props.formik.handleChange}
                  name="username"
                  onBlur={props.formik.handleBlur}
                  title="Username"
                  value={props.formik.values.username}
                  errors={props.formik.errors}
                  dataTestId="username"
                  ariaLabel="username"
                />
              </Col>
              <Col lg="6">
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
              </Col>
            </Row>
            <Row className="form-phone-number">
              <label>Phone Number</label>
              <PhoneInput
                country={"us"}
                value={props.formik.values.phoneNumber}
                onChange={props.formik.handleChange}
              />
            </Row>
            <div className="form-items sign-up-text">
              <Router history={history}>
                <NavLink to="/login">Login?</NavLink>
              </Router>
            </div>
            <div className="form-button-container">
              <FullWidthButton
                type="submit"
                name="Sign Up"
                dataTestId="signup"
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
