import jikan from "./jikan";

export const getAnimeBySearch = async (q) => {
  const { data } = await jikan.get("/anime", {
    method: "GET",
    params: {
      q: q,
    },
  });
  return data.data;
};

export const getAnimeById = async (id) => {
  const { data } = await jikan.get(`/anime/${id}/full`);
  return data;
};

export const getAnimePicturesById = async (id) => {
  const { data } = await jikan.get(`/anime/${id}/pictures`);
  return data;
};

export const getAnimeCharactersById = async (id) => {
  const { data } = await jikan.get(`/anime/${id}/characters`);
  return data;
};
