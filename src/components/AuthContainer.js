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
        color: #f0f0f0;
        text-decoration: none;
      }
    }
  }
`;

export default AuthContainer;
