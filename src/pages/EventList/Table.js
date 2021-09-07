import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .button {
    border: 0px;
  }

  .button-success {
    color: white;
    background-color: green;
  }

  .create-button-container {
    margin: 10px 0;
    display: flex;
    justify-content: flex-end;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;
    max-width: 40rem;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ events, editEvent, handleShow }) {
  // Render the UI for your table

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {events.length > 0 ? (
          events.map((event) => {
            return (
              <tr>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.description}</td>
                <td>
                  <button onClick={() => editEvent(event.id)}>Edit</button>
                  <button onClick={() => handleShow(event.id)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <p>No Event avaliable</p>
        )}
      </tbody>
    </table>
  );
}

function App(props) {
  return (
    <Styles>
      <div className="create-button-container">
        <button
          type="button"
          onClick={props.goToCreateEvent}
          className="button button-success"
        >
          {" "}
          + Create Event
        </button>
      </div>
      <Table
        events={props.events}
        editEvent={props.editEvent}
        handleShow={props.handleShow}
      />
    </Styles>
  );
}

export default App;
