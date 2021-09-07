import styled from "styled-components";

const FormContainer = styled.div`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .form-main-container {
      width: 100%;
      max-width: 40rem;
      padding: 2rem;
      border: 1px solid #eee;
      border-radius: 0.8rem;
    }

    .form-items {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 2rem;

      a {
        color: #000;
        text-decoration: none;
      }
    }

    .form-phone-number {
      padding-bottom: 2rem;
      label {
        padding-bottom: 1rem;
      }
      input {
        padding-top: 7.5px;
        padding-bottom: 7.5px;
        width: 100%;
      }
    }
  }
`;

export default FormContainer;
