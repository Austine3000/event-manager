export const login = (payload) => {
  try {
    const response = {}
    const token = response.headers["auth-token"];
    const userPermission = JSON.stringify(response.data);

    localStorage.setItem("authToken", token);
    localStorage.setItem("usergroup", JSON.stringify(payload.usergroup));
    localStorage.setItem("userPermission", userPermission);

    return response;
  } catch (err) {
    throw err;
  }
};
