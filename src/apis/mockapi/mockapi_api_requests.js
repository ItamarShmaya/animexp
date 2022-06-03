import mockapi from "./mockapi.js";

export const getUsers = async () => {
  const { data } = await mockapi.get("/users");
  return data;
};

export const addUser = async (user) => {
  const { data } = await mockapi.post("/users", user);
  return data;
};
