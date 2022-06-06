import { getUsers } from "./mockapi_api_requests";

export const doesUsernameExist = (usernameToCheck, users) => {
  return users.find((user) => {
    return user.username.toLowerCase() === usernameToCheck.toLowerCase();
  })
    ? true
    : false;
};

export const getUserByUsername = (username, users) => {
  return users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
};

export const doesUsernameMatchPassword = (user, username, password) => {
  return (
    user.username.toLowerCase() === username.toLowerCase() &&
    user.password.toLowerCase() === password.toLowerCase()
  );
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
