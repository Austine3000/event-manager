import React from "react";
import styled from "styled-components";

export const InputWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    padding-bottom: 2.4rem;
    input {
      height: 3.2rem;
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

export const Input = (props) => {
  let error = false;
  if (props.errors[props.name]) {
    error = true;
  }

  return (
    <InputWrapper>
      {props.title ? <label>{props.title}</label> : ""}

      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        min={props.min}
        max={props.max}
        className={error ? "input-error" : ""}
        aria-label={props.ariaLabel}
        data-testid={props.dataTestId}
      />
      {props.errors[props.name] && (
        <div className="error">{props.errors[props.name]}</div>
      )}
    </InputWrapper>
  );
};
