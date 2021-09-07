export const login = (payload) => {
  let users = JSON.parse(localStorage.users || "[]");

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === payload.username &&
      users[i].password === payload.password
    ) {
      localStorage.setItem("user", JSON.stringify(users[i]));
      return {
        message: "User successfully login",
        status: 200,
      };
    }
  }

  return {
    message: "Invalid username or password",
    status: 401,
  };
};
