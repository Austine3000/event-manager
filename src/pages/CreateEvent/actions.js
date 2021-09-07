export const createEvent = (payload) => {
  let events = JSON.parse(localStorage.events || "[]");

  events = [...events, payload];

  localStorage.setItem("events", JSON.stringify(events));

  return {
    message: "Event successfully created",
    status: 200,
  };
};
