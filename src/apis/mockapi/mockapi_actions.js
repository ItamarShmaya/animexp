import { getUsers } from "./mockapi_api_requests";

export const doesUsernameExist = (username, users) => {
  return users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  )
    ? true
    : false;
};

export const getUserByUsername = (username, users) => {
  return users.find((user) => user.username === username);
};

export const doesUsernameMatchPassword = (user, username, password) => {
  return user.username === username && user.password === password;
};

export const isAnimeInList = (user, animeId) => {
  return user.list.find((anime) => {
    return anime.mal_id === animeId;
  })
    ? true
    : false;
};

export const findUserByUsername = async (username) => {
  const users = await getUsers();
  return users.find((user) => {
    return user.username === username;
  });
};
