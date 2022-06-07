import jikan from "./jikan";
import { handlerSuspender } from "../api_utils/api_utils";

export const fetchLandingPage = () => {
  const TopAnimePromise = getTopAnime();
  const TopMangaPromise = getTopManga();
  const TopCharactersPromise = getTopCharacters();

  return {
    topAnime: handlerSuspender(TopAnimePromise),
    topMana: handlerSuspender(TopMangaPromise),
    topCharacters: handlerSuspender(TopCharactersPromise),
  };
};

// export const fetchAnimePage = (id) => {
//   const animePromise = getAnimeById(id);
//   const animePicturesPromise = getAnimePicturesById(id);
//   const animeCharactersPromise = getAnimeCharactersById(id);
//   const animeRecommendationsPromise = getAnimeRecommendationsById(id);

//   return {
//     anime: handlerSuspender(animePromise),
//     animePictures: handlerSuspender(animePicturesPromise),
//     animeCharacters: handlerSuspender(animeCharactersPromise),
//     animeRecommendations: handlerSuspender(animeRecommendationsPromise),
//   };
// };

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
    return error;
  }
};

export const getAnimePicturesById = async (id) => {
  try {
    const { data: pictures } = await jikan.get(`/anime/${id}/pictures`);
    return pictures;
  } catch (error) {
    console.error(error);
    return error;
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
    return error;
  }
};

export const getTopAnime = async () => {
  // try {
  const { data: topAnime } = await jikan.get("/top/anime");
  return topAnime;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
};

export const getTopManga = async () => {
  // try {
  const { data: topManga } = await jikan.get("/top/manga");
  return topManga;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
};

export const getTopCharacters = async () => {
  // try {
  const { data: top25Characters } = await jikan.get("/top/characters");
  return top25Characters;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
};

export const getAnimeRecommendationsById = async (id) => {
  try {
    const { data: animeRecommendations } = await jikan.get(
      `anime/${id}/recommendations`
    );
    return animeRecommendations;
  } catch (error) {
    console.error(error);
    return error;
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
