import apiRequest from "@/apis";

export const getPlayingMovies = async () => {
  try {
    const response = await apiRequest(`/movie/now_playing`, {
      method: "get",
      params: {
        page: 1,
      },
    });

    if (
      response &&
      response.data &&
      response.data.results &&
      response.data.results.length
    ) {
      return response.data.results;
    }
  } catch (error) {
    console.error(`getPlayingMovies Error.. ${error}`);

    return error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await apiRequest(`/movie/popular`, {
      method: "get",
      params: {
        page: 1,
      },
    });

    if (
      response &&
      response.data &&
      response.data.results &&
      response.data.results.length
    ) {
      return response.data.results;
    }
  } catch (error) {
    console.error(`GetPopularMovies Error.. ${error}`);

    return error;
  }
};

export const getTopRateMovies = async () => {
  try {
    const response = await apiRequest(`/movie/top_rated`, {
      method: "get",
      params: {
        page: 1,
      },
    });

    if (
      response &&
      response.data &&
      response.data.results &&
      response.data.results.length
    ) {
      return response.data.results;
    }
  } catch (error) {
    console.error(`getTopRateMovies Error.. ${error}`);

    return error;
  }
};
