import mockapi from "./mockapi.js";

export const getUsers = async () => {
  try {
    const { data: users } = await mockapi.get("/users");
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (user) => {
  try {
    const { data: addedUser } = await mockapi.post("/users", user);
    return addedUser;
  } catch (error) {
    console.error(error);
  }
};

export const addAnimeToUserList = async (id, body) => {
  try {
    const { data: updatedUser } = await mockapi.put(`/users/${id}`, body);
    return updatedUser;
  } catch (error) {
    console.error(error);
  }
};

export const updateValuesInUserList = async (id, body) => {
  try {
    const { data: updatedUser } = await mockapi.put(`/users/${id}`, body);
    return updatedUser;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id) => {
  try {
    const { data: user } = await mockapi.get(`/users/${id}`);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersBySearch = async (q) => {
  const users = await getUsers();
  const results = users.filter((user) => {
    return user.username.toLowerCase().includes(q.toLowerCase());
  });
  return results;
};

export const updateUserAvatarImage = async (id, body) => {
  try {
    const { data: user } = await mockapi.put(`/users/${id}`, body);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserGender = async (id, body) => {
  try {
    const { data: user } = await mockapi.put(`/users/${id}`, body);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserBirthday = async (id, body) => {
  try {
    const { data: user } = await mockapi.put(`/users/${id}`, body);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const updateAboutMe = async (id, body) => {
  try {
    const { data: user } = await mockapi.put(`/users/${id}`, body);
    return user;
  } catch (error) {
    console.error(error);
  }
};
