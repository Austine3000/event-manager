import React from "react";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: inline;
  button {
    padding: 1rem 1rem;
    font-size: 1.4rem;
    border: 1px solid ${({ theme }) => theme.button.borderColor};
    background-color: ${({ theme }) => theme.button.bgColor};
    color: ${({ theme }) => theme.button.color};
    text-align: center;
    cursor: pointer;
    border-radius: 0.5rem;
  }
`;

export const FullWidthButtonWrapper = styled(ButtonWrapper)`
  button {
    width: 100%;
  }
`;

export const OutlineButtonWrapper = styled(ButtonWrapper)`
  button {
    padding: 0.5rem;
  }
`;

export const Button = (props) => (
  <button
    onClick={props.onClick}
    type={props.type}
    disabled={props.isLoading}
    data-testid={props.dataTestId}
  >
    {props.isLoading ? (
      <>
        <span className="spinner-grow spinner-grow-sm"></span>
        Loading...
      </>
    ) : (
      props.name
    )}
  </button>
);

export const RegularButton = (props) => {
  return (
    <ButtonWrapper className={props.className} theme={props.theme}>
      <Button {...props} />
    </ButtonWrapper>
  );
};

export const FullWidthButton = (props) => (
  <FullWidthButtonWrapper className={props.className} theme={props.theme}>
    <Button {...props} />
  </FullWidthButtonWrapper>
);

export const OutlineButton = (props) => (
  <OutlineButtonWrapper className={props.className} theme={props.theme}>
    <Button {...props} />
  </OutlineButtonWrapper>
);
