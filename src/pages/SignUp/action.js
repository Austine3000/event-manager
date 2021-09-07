export const signup = (payload) => {
  let users = JSON.parse(localStorage.users || "[]");

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === payload.username) {
      return {
        message: "User already exists",
        status: 409,
      };
    }
  }

  users = [...users, payload];

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(payload));

  return {
    message: "User successfully created",
    status: 200,
  };
};
