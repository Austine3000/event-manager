import React from "react";
import { Container } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { FullWidthButton } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const Form = (props) => {
  return (
    <Container>
      <FormContainer>
        <div className="form-container">
          <form
            className="form-main-container"
            onSubmit={props.formik.handleSubmit}
          >
            <h1>{props.title}</h1>
            <Input
              id="name"
              type="text"
              onChange={props.formik.handleChange}
              name="name"
              onBlur={props.formik.handleBlur}
              title="Event Name"
              value={props.formik.values.name}
              errors={props.formik.errors}
              dataTestId="name"
              ariaLabel="name"
            />
            <Input
              id="date"
              type="date"
              onChange={props.formik.handleChange}
              name="date"
              onBlur={props.formik.handleBlur}
              title="Event Date"
              value={props.formik.values.date}
              errors={props.formik.errors}
              dataTestId="date"
              ariaLabel="date"
            />
            <TextArea
              id="description"
              type="text"
              onChange={props.formik.handleChange}
              name="description"
              onBlur={props.formik.handleBlur}
              title="Event Description"
              value={props.formik.values.description}
              errors={props.formik.errors}
              dataTestId="description"
              ariaLabel="description"
            />
            <div className="form-button-container">
              <FullWidthButton
                type="submit"
                name="Submit"
                dataTestId="submit"
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
