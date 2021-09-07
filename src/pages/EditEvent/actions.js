export const updateEvent = (payload, id) => {
  let events = JSON.parse(localStorage.events || "[]");

  events = events.map((item) => {
    if (item.id === Number(id)) {
      return {
        ...item,
        ...payload,
      };
    }

    return item;
  });

  localStorage.setItem("events", JSON.stringify(events));

  return {
    message: "Event successfully update",
    status: 200,
  };
};
