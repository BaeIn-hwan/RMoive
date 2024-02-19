import apiRequest from "..";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return apiRequest.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return apiRequest.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return apiRequest.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return apiRequest.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return apiRequest.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return apiRequest.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return apiRequest.get(url, { params: {} });
  },
};

export default tmdbApi;
