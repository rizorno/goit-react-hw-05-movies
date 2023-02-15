import axios from 'axios';

const moviesService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'bc23d88e8c379b88dcc9e69c75bc8f78',
    language: 'en-US',
  },
});

export const getGenres = async params => {
  const { data } = await moviesService.get('genre/movie/list', {
    params,
  });
  return data;
};

export const getTrending = async params => {
  const { data } = await moviesService.get('trending/movie/day', {
    params,
  });
  return data;
};

export const getTop = async params => {
  const { data } = await moviesService.get('movie/top_rated', {
    params,
  });
  return data;
};

export const getKeyword = async params => {
  const { data } = await moviesService.get('search/movie', {
    params,
  });
  return data;
};

export const getById = async (id, params) => {
  const { data } = await moviesService.get(`movie/${id}`, {
    params,
  });
  return data;
};

export const getCast = async (id, params) => {
  const { data } = await moviesService.get(`movie/${id}/credits`, {
    params,
  });
  return data;
};

export const getReviews = async (id, params) => {
  const { data } = await moviesService.get(`movie/${id}/reviews`, {
    params,
  });
  return data;
};

export const getYouTube = async (id, params) => {
  const { data } = await moviesService.get(`movie/${id}/videos`, {
    params,
  });
  return data;
};
