import React from "react";
import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    padding-bottom: 2.4rem;
    textarea {
      border: 1px solid ${({ theme }) => theme.input.borderColor} !important;
      border-radius: 0.8rem;
      border: 0px;
      padding: 0 1.6rem;
    }
    .input-error {
      border: 1px solid ${({ theme }) => theme.input.borderError} !important;
    }
    input::placeholder {
      color: ${({ theme }) => theme.input.placeholderColor} !important;
    }
    .error {
      color: ${({ theme }) => theme.input.textError};
    }
    label {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      display: block;
    }
  }
`;

export const TextArea = (props) => {
  const errorMessage = props.errors[props.name];

  return (
    <TextAreaWrapper>
      {props.title ? <label>{props.title}</label> : ""}

      <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={errorMessage ? "input-error" : ""}
        aria-label={props.ariaLabel}
        data-testid={props.dataTestId}
        rows={5}
      ></textarea>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </TextAreaWrapper>
  );
};
