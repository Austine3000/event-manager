import styled from "styled-components";

const AuthContainer = styled.div`
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .auth-main-container {
      width: 100%;
      max-width: 30rem;
      padding: 2rem;
      border: 1px solid #eee;
      border-radius: 0.8rem;
    }

    .auth-form-items {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 2rem;

      a {
        color: #000;
        text-decoration: none;
      }
    }

    .auth-phone-number {
      padding-bottom: 2rem;
      label {
        padding-bottom: 1rem;
      }
      input {
        padding-top: 7.5px;
        padding-bottom: 7.5px;
      }
    }
  }
`;

export default AuthContainer;
