export const doesUsernameExist = (username, users) => {
  return users.find((user) => user.username === username) ? true : false;
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
