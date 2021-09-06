import React from "react";
import Table from "./Table";
import Loading from "../../components/Loading";

const EventList = () => {
  return (
    <Loading>
      <Table />
    </Loading>
  );
};

export default EventList;
