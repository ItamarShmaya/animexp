export const doesUsernameExist = (username, users) => {
  return users.find((user) => user.username === username) ? true : false;
};

export const getUserByUsername = (username, users) => {
  return users.find((user) => user.username === username);
};

export const doesUsernameMatchPassword = (user, username, password) => {
  return user.username === username && user.password === password;
};
