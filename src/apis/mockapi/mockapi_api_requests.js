import mockapi from "./mockapi.js";

export const getUsers = async () => {
  const { data } = await mockapi.get("/users");
  return data;
};

export const addUser = async (user) => {
  const { data } = await mockapi.post("/users", user);
  return data;
};

export const addAnimeToUserList = async (id, body) => {
  const res = await mockapi.put(`/users/${id}`, body);
  return res;
};

export const updateValuesInUserList = async (id, body) => {
  const res = await mockapi.put(`/users/${id}`, body);
  return res;
};

export const getUserById = async (id) => {
  const { data } = await mockapi.get(`/users/${id}`);
  return data;
};
