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
  try {
    const { data: animeById } = await jikan.get(`/anime/${id}/full`);
    return animeById;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimePicturesById = async (id) => {
  try {
    const { data: pictures } = await jikan.get(`/anime/${id}/pictures`);
    return pictures;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeCharactersById = async (id) => {
  try {
    const { data: charactersByAnime } = await jikan.get(
      `/anime/${id}/characters`
    );
    return charactersByAnime;
  } catch (error) {
    console.error(error);
  }
};

export const getTopAnime = async () => {
  try {
    const { data: anime } = await jikan.get("/top/anime");
    return anime;
  } catch (error) {
    console.error(error);
  }
};

export const getTopManga = async () => {
  try {
    const { data: manga } = await jikan.get("/top/manga");
    return manga;
  } catch (error) {
    console.error(error);
  }
};

export const getTopCharacters = async () => {
  try {
    const { data: top25Characters } = await jikan.get("/top/characters");
    return top25Characters;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeRecommendationsById = async (id) => {
  try {
    const { data: animeRecommendations } = await jikan.get(
      `anime/${id}/recommendations`
    );
    return animeRecommendations;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimeReviewsById = async (id) => {
  try {
    const { data: animeReviews } = await jikan.get(`anime/${id}/reviews`);
    return animeReviews;
  } catch (error) {
    console.error(error);
  }
};
